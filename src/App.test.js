import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Botsubmit from "./components/botsubmit";

describe("Botsubmit test", () => {
  test("Submit form", async () => {
    window.alert = () => {};
    render(<Botsubmit />);

    const inputName = screen.getByLabelText("nombre:");
    const inputAvatar = screen.getByLabelText("avatar:");
    const inputCodigo = screen.getByLabelText("código:");

    var av = new File([""], "avatar.png");
    var cod = new File(["codigooo"], "codigo.py");

    userEvent.type(inputName, "Marcelo");
    userEvent.upload(inputAvatar, av);
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button", {name: "Submit"});

    userEvent.click(button);

    const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument();
  });
});
