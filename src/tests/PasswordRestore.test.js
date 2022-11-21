import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
// import testing utilitiess
import {render, fireEvent, screen, waitFor} from "@testing-library/react";
import PasswordRestore from "../components/PasswordRestore/PasswordRestore";
import {BrowserRouter as Router} from "react-router-dom";
import {server} from "../__mocks__/server.js";
import {act} from "react-dom/test-utils";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

test("render full password restore component successfully", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );
  // Render EnterEmailView
  expect.toBeInTheDocument(screen.getByTestId("formEmail"));
  expect.toBeInTheDocument(screen.getByTestId("inputUsernameGroup"));
  expect.toBeInTheDocument(screen.getByTestId("inputUsernameLabel"));
  expect.toBeInTheDocument(screen.getByTestId("inputUsername"));
  expect.toBeInTheDocument(screen.getByTestId("inputEmailGroup"));
  expect.toBeInTheDocument(screen.getByTestId("inputEmailLabel"));
  expect.toBeInTheDocument(screen.getByTestId("inputEmail"));
  expect.toBeInTheDocument(screen.getByTestId("submitButton"));

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  // Render PasswordRestoreView
  await waitFor(() => {
    screen.getByTestId("formPassword");
    screen.getByTestId("codeInputGroup");
    screen.getByTestId("codeLabel");
    screen.getByTestId("codeInput");
    screen.getByTestId("PasswordGroup");
    screen.getByTestId("labelPassword");
    screen.getByTestId("inputPassword");
    screen.getByTestId("confirmPasswordGroup");
    screen.getByTestId("labelConfirmPassword");
    screen.getByTestId("inputConfirmPassword");
    screen.getByTestId("submitPassword");
  });
});

test("enter email and enter code with new password", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    fireEvent.change(screen.getByTestId("codeInput"), {
      target: {value: "232323"},
    });
    fireEvent.change(screen.getByTestId("inputPassword"), {
      target: {value: "asdASD123"},
    });
    fireEvent.change(screen.getByTestId("inputConfirmPassword"), {
      target: {value: "asdASD123"},
    });
    fireEvent.click(screen.getByTestId("submitPassword"));
  });
});

test("error when not valid email", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "sebagmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => expect.toBeInTheDocument(screen.getByRole("alertError")));
});

test("error when empty email", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });

  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => expect.toBeInTheDocument(screen.getByRole("alertError")));
});

test("error when empty username", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });

  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => expect.toBeInTheDocument(screen.getByRole("alertError")));
});

test("error when username too long", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });

  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "aaaaaaaaaaaaaaaaaaaa"},
  });

  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() =>
    expect.toBeInTheDocument(
      screen.getByText("Username must be at most 16 characters long.")
    )
  );
});

test("error when username too short", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });

  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "a"},
  });

  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() =>
    expect.toBeInTheDocument(
      screen.getByText("Username must be at least 3 characters long.")
    )
  );
});

test("enter email and enter code with passwords that do not match", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    fireEvent.change(screen.getByTestId("codeInput"), {
      target: {value: "232323"},
    });
    fireEvent.change(screen.getByTestId("inputPassword"), {
      target: {value: "asdASD123"},
    });
    fireEvent.change(screen.getByTestId("inputConfirmPassword"), {
      target: {value: "notequal"},
    });
    fireEvent.click(screen.getByTestId("submitPassword"));
    expect.toBeInTheDocument(screen.getByText("Passwords do not match"));
  });
});

test("enter email and enter code with new passwords with no numbers", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    fireEvent.change(screen.getByTestId("codeInput"), {
      target: {value: "232323"},
    });
    fireEvent.change(screen.getByTestId("inputPassword"), {
      target: {value: "uglypassword"},
    });
    fireEvent.change(screen.getByTestId("inputConfirmPassword"), {
      target: {value: "uglypassword"},
    });
    fireEvent.click(screen.getByTestId("submitPassword"));
    expect.toBeInTheDocument(
      screen.getByText(
        "The password must contain at least 8 characters, one uppercase, lowercase and number"
      )
    );
  });
});

test("enter email and enter code with empty password", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    fireEvent.change(screen.getByTestId("codeInput"), {
      target: {value: "232323"},
    });
    fireEvent.change(screen.getByTestId("inputPassword"), {
      target: {value: ""},
    });
    fireEvent.change(screen.getByTestId("inputConfirmPassword"), {
      target: {value: "thiswontwork"},
    });
    fireEvent.click(screen.getByTestId("submitPassword"));
    expect.toBeInTheDocument(screen.getByText("Password is required"));
  });
});

test("enter email and enter code with new passwords with no numbers", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    fireEvent.change(screen.getByTestId("codeInput"), {
      target: {value: "232323"},
    });
    fireEvent.change(screen.getByTestId("inputPassword"), {
      target: {value: "uglypassword"},
    });
    fireEvent.change(screen.getByTestId("inputConfirmPassword"), {
      target: {value: "uglypassword"},
    });
    fireEvent.click(screen.getByTestId("submitPassword"));
    expect.toBeInTheDocument(
      screen.getByText(
        "The password must contain at least 8 characters, one uppercase, lowercase and number"
      )
    );
  });
});

test("enter email and enter code with empty password confirmation", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    fireEvent.change(screen.getByTestId("codeInput"), {
      target: {value: "232323"},
    });
    fireEvent.change(screen.getByTestId("inputPassword"), {
      target: {value: "Nic3Passw0rd"},
    });
    fireEvent.change(screen.getByTestId("inputConfirmPassword"), {
      target: {value: ""},
    });
    fireEvent.click(screen.getByTestId("submitPassword"));
    expect.toBeInTheDocument(screen.getByText("Enter your password again"));
  });
});

test("enter email", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );
  server.use(
    rest.post(
      `${process.env.REACT_APP_API_KEY}password-restore-request`,
      (req, res, ctx) => {
        return res(
          ctx.status(409),
          ctx.json({message: "There is no user with that email and username."})
        );
      }
    )
  );
  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  act(() => fireEvent.click(screen.getByTestId("submitButton")));

  waitFor(() => {
    expect.toBeInTheDocument(
      screen.getByText("There is no user with that email and username.")
    );
  });
});

test("enter email and 409 error", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  server.use(
    rest.post(
      `${process.env.REACT_APP_API_KEY}password-restore-request`,
      (req, res, ctx) => {
        return res(
          ctx.status(409),
          ctx.json({detail: "There is no user with that email and username."})
        );
      }
    )
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    expect.toBeInTheDocument(
      screen.getByText("There is no user with that email and username.")
    );
  });
});

test("enter email and random error", async () => {
  render(
    <div>
      <Router>
        <PasswordRestore />
      </Router>
    </div>
  );

  server.use(
    rest.post(
      `${process.env.REACT_APP_API_KEY}password-restore-request`,
      (req, res, ctx) => {
        return res(ctx.status(418), ctx.json({detail: "Unkown error"}));
      }
    )
  );

  // Enter and submit data
  fireEvent.change(screen.getByTestId("inputUsername"), {
    target: {value: "seba.giraudo"},
  });
  fireEvent.change(screen.getByTestId("inputEmail"), {
    target: {value: "seba@gmail.com"},
  });
  fireEvent.click(screen.getByTestId("submitButton"));

  await waitFor(() => {
    expect.toBeInTheDocument(screen.getByText("Unkown error"));
  });
});
