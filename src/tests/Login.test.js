// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
import {setupServer} from "msw/node";
// import testing utilities
import {render, fireEvent, screen} from "@testing-library/react";
import Login from "../components/Login";
import {BrowserRouter as Router, Link} from "react-router-dom";

const fakeUserResponse = {accessToken: "fake_user_token"};
const server = setupServer(
  rest.post("http://localhost:8000/login", (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  window.localStorage.removeItem("user");
});
afterAll(() => server.close());

test("render login component successfully", async () => {
  render(
    <div>
      <Router>
        <Login />
      </Router>
    </div>
  );

  expect.toBeInTheDocument(screen.getByTestId("Title"));
  expect.toBeInTheDocument(screen.getByTestId("form"));
  expect.toBeInTheDocument(screen.getByTestId("emailGroup"));
  expect.toBeInTheDocument(screen.getByTestId("titleEmail"));
  expect.toBeInTheDocument(screen.getByTestId("passwordGroup"));
  expect.toBeInTheDocument(screen.getByTestId("titlePassword"));
  expect.toBeInTheDocument(screen.getByTestId("inputPassword"));
  expect.toBeInTheDocument(screen.getByTestId("loginButton"));
  expect.toBeInTheDocument(screen.getByTestId("notAMemb"));
  expect.toBeInTheDocument(screen.getByTestId("linkToReg"));
});

test("allows the user to login successfully", async () => {
  render(
    <div>
      <Router>
        <Login />
      </Router>
    </div>
  );

  // fill out the form
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "sadfASDF234"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));
  const alert = await screen.findByRole("alert");
  // .toHaveTextContent() comes from jest-dom's assertions
  // otherwise you could use expect(alert.textContent).toMatch(/congrats/i)
  // but jest-dom will give you better error messages which is why it's recommended
  expect(alert).toHaveTextContent("Login exitoso!");

  let token = localStorage.getItem("user");
  expect(token).toEqual(fakeUserResponse.accessToken);
});

test("error when email and password empty", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.click(screen.getByTestId("loginButton"));

  const errorPasswordEmpty = await screen.findByTestId("errorPasswordEmpty");
  expect.toBeInTheDocument(errorPasswordEmpty);

  const errorEmailEmpty = await screen.findByTestId("errorEmailEmpty");
  expect.toBeInTheDocument(errorEmailEmpty);
});

test("error when email and password not valid", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "testing"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "testing"},
  });
  fireEvent.click(screen.getByTestId("loginButton"));
  const errorPasswordEmpty = await screen.findByTestId("errorPasswordNotValid");
  expect.toBeInTheDocument(errorPasswordEmpty);
  const errorEmailEmpty = await screen.findByTestId("errorEmailNotValid");
  expect.toBeInTheDocument(errorEmailEmpty);
});

test("network error", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  server.use(
    rest.post("http://localhost:8000/login", (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({message: "Internal server error"}));
    })
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "sadfASDF234"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  //const alert = await screen.getByTestId("alert");
  //expect(alert).toHaveTextContent("Unknown error");
  //expect(window.localStorage.getItem("user")).toBeNull();
});
