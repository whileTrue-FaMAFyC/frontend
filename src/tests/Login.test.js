import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/Login";

describe("Formlario login test", () => {
  test("se crea un nuevo usuario", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const inputAvatar = screen.getByLabelText("Avatar");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");
    userEvent.type(inputAvatar, "../logo.svg");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument;
  });
});
