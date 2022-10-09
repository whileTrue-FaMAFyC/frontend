import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Botsubmit from "./components/botsubmit";

describe("Botsubmit test", () => {
  test("Submit form", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText("name");
    const inputAvatar = screen.getByLabelText("avatar");
    const inputCodigo = screen.getByLabelText("codigo");

    var av = new File([""], "avatar.png");
    var cod = new File(["codigooo"], "codigo.py");

    userEvent.type(inputName, "Marcelo");
    userEvent.upload(inputAvatar, av);
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button", {name: /Submit/i});

    userEvent.click(button);

    const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument();
  });
});
