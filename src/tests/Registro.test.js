import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "../components/Reg";

describe("Formlario test", () => {
  test("se crea un nuevo usuario", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const inputAvatar = screen.getByLabelText("Avatar");
    const av = new File(["holis"], "aaavatar.pdf", {type: "application/pdf"}); //TIENE QUE FALLAR EL TEST

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");
    // userEvent.type(inputAvatar, av);

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument;
  });
});
