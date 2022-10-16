import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Botsubmit from "./components/Botsubmit";

const jsdomAlert = window.alert; // remember the jsdom alert
window.alert = (e) => {
  console.log(e);
};

describe("Botsubmit test", () => {
  test("Submit form", async () => {
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {};
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

  test("Alerts campos obligatorios", async () => {
    render(<Botsubmit />);

    const button = screen.getByRole("button", {name: /Subir/i});

    userEvent.click(button);

    const error_name = await screen.findByRole("no_name");
    const error_codigo = await screen.findByRole("invalid_code");
    //const alert = await screen.findByRole("alert");

    expect(error_name).toBeInTheDocument;
    expect(error_codigo).toBeInTheDocument;
  });

  test("Nombre invalido", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText(/nombre:/i);
    const inputAvatar = screen.getByLabelText(/avatar:/i);
    const inputCodigo = screen.getByLabelText(/codigo:/i);

    var av = new File(["avatar"], "avatar.png", {type: "image/png"});
    var cod = new File(["codigooo"], "codigo.py", {type: "text/x-python"});

    userEvent.type(inputName, "Marcelo@384");
    userEvent.upload(inputAvatar, av);
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const invalid_name = await screen.findByRole("invalid_name");

    expect(invalid_name).toBeInTheDocument();
  });

  test("Codigo invalido", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText(/nombre:/i);
    const inputAvatar = screen.getByLabelText(/avatar:/i);
    const inputCodigo = screen.getByLabelText(/codigo:/i);

    var av = new File(["avatar"], "avatar.png", {type: "image/png"});
    var cod = new File(["codigooo"], "codigo.py", {type: "text/plain"});

    userEvent.type(inputName, "Marcelo");
    userEvent.upload(inputAvatar, av);
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const invalid_code = await screen.findByRole("invalid_code");

    expect(invalid_code).toBeInTheDocument();
  });

  test("Avatar invalido", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText(/nombre:/i);
    const inputAvatar = screen.getByLabelText(/avatar:/i);
    const inputCodigo = screen.getByLabelText(/codigo:/i);

    var av = new File(["avatar"], "avatar.png", {type: "application/pdf"});
    var cod = new File(["codigooo"], "codigo.py", {type: "text/x-python"});

    userEvent.type(inputName, "Marcelo");
    userEvent.upload(inputAvatar, av);
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const invalid_avatar = await screen.findByRole("invalid_avatar");

    expect(invalid_avatar).toBeInTheDocument();
  });

  test("Falta codigo", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText(/nombre:/i);
    const inputAvatar = screen.getByLabelText(/avatar:/i);
    const inputCodigo = screen.getByLabelText(/codigo:/i);

    var av = new File(["avatar"], "avatar.png", {type: "application/pdf"});

    userEvent.type(inputName, "Marcelo");
    userEvent.upload(inputAvatar, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const invalid_code = await screen.findByRole("invalid_code");

    expect(invalid_code).toBeInTheDocument();
  });

  test("Falta nombre", async () => {
    render(<Botsubmit />);

    const inputName = screen.getByLabelText(/nombre:/i);
    const inputAvatar = screen.getByLabelText(/avatar:/i);
    const inputCodigo = screen.getByLabelText(/codigo:/i);

    var av = new File(["avatar"], "avatar.png", {type: "application/pdf"});
    var cod = new File(["codigooo"], "codigo.py", {type: "text/x-python"});

    userEvent.upload(inputAvatar, av);
    userEvent.upload(inputCodigo, cod);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const no_name = await screen.findByRole("no_name");

    expect(no_name).toBeInTheDocument();
  });
});
