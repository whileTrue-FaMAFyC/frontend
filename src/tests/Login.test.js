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

  expect.not.toBeInTheDocument(screen.queryByTestId("loginExitoso"));
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

  const alert = await screen.findByRole("alert");
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

  const alert = await screen.findByRole("alert");
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

  // email empty error should display
  const errorUsernameOrEmailEmpty = await screen.findByTestId(
    "errorUsernameOrEmailEmpty"
  );
  expect.toBeInTheDocument(errorUsernameOrEmailEmpty);

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

  expect.not.toBeInTheDocument(await screen.queryByTestId("loginExitoso"));
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

  // password error should display
  const errorPasswordEmpty = await screen.findByTestId("errorPasswordEmpty");
  expect.toBeInTheDocument(errorPasswordEmpty);

  // email error should not display
  const errorUsernameOrEmailEmpty = await screen.queryByTestId(
    "errorUsernameOrEmailEmpty"
  );
  expect.not.toBeInTheDocument(errorUsernameOrEmailEmpty);
  // email empty error should not display
  const errorEmailNotValid = await screen.queryByTestId("errorEmailNotValid");
  expect.not.toBeInTheDocument(errorEmailNotValid);
  // password not valid error should not display
  const errorPasswordNotValid = await screen.queryByTestId(
    "errorPasswordNotValid"
  );
  expect.not.toBeInTheDocument(errorPasswordNotValid);

  expect.not.toBeInTheDocument(await screen.queryByTestId("loginExitoso"));
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

  // password not valid error should display
  const errorPasswordNotValid = await screen.findByTestId(
    "errorPasswordNotValid"
  );
  expect.toBeInTheDocument(errorPasswordNotValid);

  // email empty error should not display
  const errorUsernameOrEmailEmpty = await screen.queryByTestId(
    "errorUsernameOrEmailEmpty"
  );
  expect.not.toBeInTheDocument(errorUsernameOrEmailEmpty);
  // email not valid error should not display
  const errorEmailNotValid = await screen.queryByTestId("errorEmailNotValid");
  expect.not.toBeInTheDocument(errorEmailNotValid);
  // password empty error should not display
  const errorPasswordEmpty = await screen.queryByTestId("errorPasswordEmpty");
  expect.not.toBeInTheDocument(errorPasswordEmpty);

  expect.not.toBeInTheDocument(await screen.queryByTestId("loginExitoso"));
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

  expect.not.toBeInTheDocument(await screen.queryByTestId("loginExitoso"));
});
