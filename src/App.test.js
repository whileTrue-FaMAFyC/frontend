import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Botsubmit from "./components/botsubmit";

describe("Botsubmit test", () => {
  test("Submit form", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText(/nombre:/i);
    const inputAvatar = screen.getByLabelText(/avatar:/i);
    const inputCodigo = screen.getByLabelText(/codigo:/i);

    var av = new File(["avatar"], "avatar.png", {type: "image/png"});
    var cod = new File(["codigooo"], "codigo.py", {type: "text/x-python"});

    userEvent.type(inputName, "Marcelo");
    userEvent.upload(inputAvatar, av);
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument();
  });

  test("form sin avatar", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText(/nombre:/i);
    const inputCodigo = screen.getByLabelText(/codigo:/i);

    var cod = new File(["codigooo"], "codigo.py", {type: "text/x-python"});

    userEvent.type(inputName, "Marcelo");
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button", {name: /Subir/i});

    userEvent.click(button);

    const alert = await screen.findByRole("alert");

    expect(alert).toBeInTheDocument();
  });
});
