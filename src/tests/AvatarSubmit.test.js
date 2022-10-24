import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AvatarSubmit from "../components/AvatarSubmit/AvatarSubmit";
import {server} from "../__mocks__/server.js";
import {rest} from "msw";

import {todoOk_201, todoMal_400} from "../__mocks__/handlers";
import {BrowserRouter as Router} from "react-router-dom";

describe("Avatar test", () => {
  beforeEach(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const jsdomAlert = window.alert; // remember the jsdom alert
  window.alert = (e) => {
    console.log(e);
  };

  // Declaration of variables
  let inputAvatar;
  let button;

  beforeEach(() => {
    render(
      <div>
        <Router>
          <AvatarSubmit />;
        </Router>
      </div>
    );

    inputAvatar = screen.getByTestId(/Avatar/i);
    button = screen.getByRole("button");
  });

  // Render
  test("0. render components successfully", async () => {
    expect.toBeInTheDocument(screen.getByTestId(/Avatar/i));
    expect.toBeInTheDocument(screen.getByRole("button"));

    expect(alert);
  });

  // Valid option
  test("1. Upload png image", async () => {
    const av = new File(["holis"], "aaavatar.png", {type: "image/png"});

    userEvent.upload(inputAvatar, av);

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert);
  });

  test("2. Upload png image", async () => {
    const av = new File(["holis"], "aaavatar.jpg", {type: "image/jpg"});

    userEvent.upload(inputAvatar, av);

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert);
  });

  test("3. Do not upload file", async () => {
    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert);
  });

  // Invalid option
  test("4. Upload non-image file", async () => {
    const av = new File(["holis"], "aaavatar.pdf", {type: "application/pdf"});

    userEvent.upload(inputAvatar, av);

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert);
  });
});
