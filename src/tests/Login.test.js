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
