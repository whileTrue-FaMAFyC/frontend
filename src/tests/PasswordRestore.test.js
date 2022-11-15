import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, fireEvent, screen, waitFor} from "@testing-library/react";
import PasswordRestore from "../components/PasswordRestore/PasswordRestore";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {server} from "../__mocks__/server.js";
import {fakeUserResponse} from "../__mocks__/handlers.js";
import {act} from "react-dom/test-utils";

//const fakeUserResponse = {Authorization: "fake_user_token"};

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("render full enter-email component successfully", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  expect.toBeInTheDocument(screen.getByTestId("formEmail"));
  expect.toBeInTheDocument(screen.getByTestId("inputUsernameGroup"));
  expect.toBeInTheDocument(screen.getByTestId("inputUsernameLabel"));
  expect.toBeInTheDocument(screen.getByTestId("inputUsername"));

  expect.toBeInTheDocument(screen.getByTestId("inputEmailGroup"));
  expect.toBeInTheDocument(screen.getByTestId("inputEmailLabel"));
  expect.toBeInTheDocument(screen.getByTestId("inputEmail"));
  expect.toBeInTheDocument(screen.getByTestId("submitButton"));
  expect.not.toBeInTheDocument(screen.findByRole("alertError"));

  //act(() => fireEvent.click(screen.getByTestId("submitButton")));

  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => screen.getByTestId("formPassword"));

  //waitFor(() => {
  //expect.toBeInTheDocument(screen.getByTestId("probando"));
  expect.toBeInTheDocument(screen.getByTestId("formPassword"));
  expect.toBeInTheDocument(screen.getByTestId("codeInputGroup"));
  expect.toBeInTheDocument(screen.getByTestId("codeLabel"));
  expect.toBeInTheDocument(screen.getByTestId("codeInput"));
  expect.toBeInTheDocument(screen.getByTestId("PasswordGroup"));
  expect.toBeInTheDocument(screen.getByTestId("labelPassword"));
  expect.toBeInTheDocument(screen.getByTestId("inputPassword"));
  expect.toBeInTheDocument(screen.getByTestId("confirmPasswordGroup"));
  expect.toBeInTheDocument(screen.getByTestId("labelConfirmPassword"));
  expect.toBeInTheDocument(screen.getByTestId("inputConfirmPassword"));
  expect.toBeInTheDocument(screen.getByTestId("submitPassword"));
  //});
});
