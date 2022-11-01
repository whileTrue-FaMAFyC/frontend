import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, fireEvent, screen} from "@testing-library/react";
import Login from "../components/Login/Login";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {server} from "../__mocks__/server.js";
import {fakeUserResponse} from "../__mocks__/handlers.js";

//const fakeUserResponse = {Authorization: "fake_user_token"};

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  window.localStorage.removeItem("user");
});
afterAll(() => server.close());

test("render full login component successfully", async () => {
  render(
    <div>
      <Router>
        <Login />
      </Router>
    </div>
  );

  expect.toBeInTheDocument(screen.findByTestId("Title"));
  expect.toBeInTheDocument(screen.findByTestId("form"));
  expect.toBeInTheDocument(screen.findByTestId("usernameOrEmailGroup"));
  expect.toBeInTheDocument(screen.findByTestId("titleUsrenameOrEmail"));
  expect.toBeInTheDocument(screen.findByTestId("inputUsernameOrEmail"));
  expect.toBeInTheDocument(screen.findByTestId("passwordGroup"));
  expect.toBeInTheDocument(screen.findByTestId("titlePassword"));
  expect.toBeInTheDocument(screen.findByTestId("inputPassword"));
  expect.toBeInTheDocument(screen.findByTestId("loginButton"));
  expect.toBeInTheDocument(screen.findByTestId("notAMemb"));
  expect.toBeInTheDocument(screen.findByTestId("linkToReg"));

  expect.not.toBeInTheDocument(screen.queryByTestId("succesfulLogin"));
});

test("allows the user to login successfully with email", async () => {
  render(
    <div>
      <Router>
        <Login />
      </Router>
    </div>
  );

  // fill out the form
  fireEvent.change(screen.getByTestId("inputUsernameOrEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "sadfASDF234"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  const alert = await screen.findByTestId("succesfulLogin");
  expect(alert).toBeInTheDocument(alert);

  let token = localStorage.getItem("user");
  expect(token).toEqual(fakeUserResponse.Authorization);
});

test("allows the user to login successfully with username", async () => {
  render(
    <div>
      <Router>
        <Login />
      </Router>
    </div>
  );

  // fill out the form
  fireEvent.change(screen.getByTestId("inputUsernameOrEmail"), {
    target: {value: "sebagir"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "sadfASDF234"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  const alert = await screen.findByTestId("succesfulLogin");
  expect(alert).toBeInTheDocument(alert);

  let token = localStorage.getItem("user");
  expect(token).toEqual(fakeUserResponse.Authorization);
});

test("error when username or email empty", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "asdASD123"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  expect.toBeInTheDocument(screen.findByTestId("errorUsernameOrEmailEmpty"));
  expect.not.toBeInTheDocument(screen.queryByTestId("errorEmailNotValid"));
  expect.not.toBeInTheDocument(screen.queryByTestId("errorPasswordNotValid"));
  expect.not.toBeInTheDocument(screen.queryByTestId("errorPasswordEmpty"));
  expect.not.toBeInTheDocument(await screen.queryByTestId("succesfulLogin"));
});

test("error when password empty", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputUsernameOrEmail"), {
    target: {value: "test@test.com"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  expect.toBeInTheDocument(screen.findByTestId("errorPasswordEmpty"));
  expect.not.toBeInTheDocument(
    screen.queryByTestId("errorUsernameOrEmailEmpty")
  );
  expect.not.toBeInTheDocument(screen.queryByTestId("errorEmailNotValid"));
  expect.not.toBeInTheDocument(screen.queryByTestId("errorPasswordNotValid"));
  expect.not.toBeInTheDocument(await screen.queryByTestId("succesfulLogin"));
});

test("error when password not valid", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputUsernameOrEmail"), {
    target: {value: "test@test.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "testing"},
  });
  fireEvent.click(screen.getByTestId("loginButton"));

  expect.toBeInTheDocument(screen.findByTestId("errorPasswordNotValid"));
  expect.not.toBeInTheDocument(
    screen.queryByTestId("errorUsernameOrEmailEmpty")
  );
  expect.not.toBeInTheDocument(screen.queryByTestId("errorEmailNotValid"));
  expect.not.toBeInTheDocument(screen.queryByTestId("errorPasswordEmpty"));
  expect.not.toBeInTheDocument(await screen.queryByTestId("succesfulLogin"));
});

test("network error", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  server.use(
    rest.post(`${process.env.REACT_APP_API_KEY}login`, (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({message: "Internal server error"}));
    })
  );

  fireEvent.change(screen.getByTestId("inputUsernameOrEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "sadfASDF234"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  // No existe token para el usuario
  let token = localStorage.getItem("user");
  expect(token).toEqual(null);

  expect.not.toBeInTheDocument(screen.queryByTestId("succesfulLogin"));
  expect.toBeInTheDocument(screen.findByTestId("error"));
});

test("invalid credentials", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  server.use(
    rest.post(`${process.env.REACT_APP_API_KEY}login`, (req, res, ctx) => {
      return res(ctx.status(401), ctx.json({message: "Unknown user"}));
    })
  );

  fireEvent.change(screen.getByTestId("inputUsernameOrEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "sadfASDF234"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  // No existe token para el usuario
  let token = localStorage.getItem("user");
  expect(token).toEqual(null);

  expect.not.toBeInTheDocument(await screen.queryByTestId("succesfulLogin"));
  expect.toBeInTheDocument(screen.findByTestId("error"));
});
