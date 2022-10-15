// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
import {setupServer} from "msw/node";
// import testing utilitiess
import {render, fireEvent, screen} from "@testing-library/react";
import Login from "../components/Login";
import {BrowserRouter as Router, Link} from "react-router-dom";

const fakeUserResponse = {Authorization: "fake_user_token"};
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

test("render full login component successfully", async () => {
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

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
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
  console.log(alert);
  expect(alert).toBeInTheDocument(alert);

  let token = localStorage.getItem("user");
  expect(token).toEqual(fakeUserResponse.Authorization);
});

test("error when email empty", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "asdASD123"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  // email empty error should display
  const errorEmailEmpty = await screen.findByTestId("errorEmailEmpty");
  expect.toBeInTheDocument(errorEmailEmpty);

  // email not valid error should not display
  const errorEmailNotValid = await screen.queryByTestId("errorEmailNotValid");
  expect.not.toBeInTheDocument(errorEmailNotValid);
  // password not valid error should not display
  const errorPasswordNotValid = await screen.queryByTestId(
    "errorPasswordNotValid"
  );
  expect.not.toBeInTheDocument(errorPasswordNotValid);
  // password empty error should not display
  const errorPasswordEmpty = await screen.queryByTestId("errorPasswordEmpty");
  expect.not.toBeInTheDocument(errorPasswordEmpty);

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
});

test("error when password empty", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "test@test.com"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  // password error should display
  const errorPasswordEmpty = await screen.findByTestId("errorPasswordEmpty");
  expect.toBeInTheDocument(errorPasswordEmpty);

  // email error should not display
  const errorEmailEmpty = await screen.queryByTestId("errorEmailEmpty");
  expect.not.toBeInTheDocument(errorEmailEmpty);
  // email empty error should not display
  const errorEmailNotValid = await screen.queryByTestId("errorEmailNotValid");
  expect.not.toBeInTheDocument(errorEmailNotValid);
  // password not valid error should not display
  const errorPasswordNotValid = await screen.queryByTestId(
    "errorPasswordNotValid"
  );
  expect.not.toBeInTheDocument(errorPasswordNotValid);

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
});

test("error when email not valid", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "testing"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "asdASD123"},
  });
  fireEvent.click(screen.getByTestId("loginButton"));

  // email not valid error should display
  const errorEmailNotValid = await screen.findByTestId("errorEmailNotValid");
  expect.toBeInTheDocument(errorEmailNotValid);

  // password not valid error should not display
  const errorPasswordNotValid = await screen.queryByTestId(
    "errorPasswordNotValid"
  );
  expect.toBeInTheDocument(errorPasswordNotValid);

  // email empty error should not display
  const errorEmailEmpty = await screen.queryByTestId("errorEmailEmpty");
  expect.not.toBeInTheDocument(errorEmailEmpty);
  // password empty error should not display
  const errorPasswordEmpty = await screen.queryByTestId("errorPasswordEmpty");
  expect.not.toBeInTheDocument(errorPasswordEmpty);

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
});

test("error when password not valid", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "test@test.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "testing"},
  });
  fireEvent.click(screen.getByTestId("loginButton"));

  // password not valid error should display
  const errorPasswordNotValid = await screen.findByTestId(
    "errorPasswordNotValid"
  );
  expect.toBeInTheDocument(errorPasswordNotValid);

  // email empty error should not display
  const errorEmailEmpty = await screen.queryByTestId("errorEmailEmpty");
  expect.not.toBeInTheDocument(errorEmailEmpty);
  // email not valid error should not display
  const errorEmailNotValid = await screen.queryByTestId("errorEmailNotValid");
  expect.not.toBeInTheDocument(errorEmailNotValid);
  // password empty error should not display
  const errorPasswordEmpty = await screen.queryByTestId("errorPasswordEmpty");
  expect.not.toBeInTheDocument(errorPasswordEmpty);

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
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

  // No existe token para el usuario
  let token = localStorage.getItem("user");
  expect(token).toEqual(null);

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
});

test("invalid credentials", async () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  server.use(
    rest.post("http://localhost:8000/login", (req, res, ctx) => {
      return res(ctx.status(401), ctx.json({message: "Unknown user"}));
    })
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.change(screen.getByTestId("inputPassword"), {
    target: {value: "sadfASDF234"},
  });

  fireEvent.click(screen.getByTestId("loginButton"));

  // No existe token para el usuario
  let token = localStorage.getItem("user");
  expect(token).toEqual(null);

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
});
