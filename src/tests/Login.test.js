import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/Login";

describe("Formlario login test", () => {
  test("se crea un nuevo usuario", async () => {
    render(<Login />);

    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");

    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");

    const button = screen.getByRole("button");

    userEvent.click(button);

    //const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument;
  });
});
