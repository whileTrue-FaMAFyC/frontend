import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "../components/Register/Register";
import {server} from "../__mocks__/server.js";
import {rest} from "msw";

import {todoOk_201, todoMal_400} from "../__mocks__/handlers";
import {BrowserRouter as Router} from "react-router-dom";

describe("Register form test", () => {
  beforeEach(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const jsdomAlert = window.alert; // remember the jsdom alert
  window.alert = (e) => {
    console.log(e);
  };

  // DECLARACION DE VARIABLES
  let inputUsername;
  let inputEmail;
  let inputPassword;
  let inputConfirmPassword;
  let button;

  beforeEach(() => {
    render(
      <div>
        <Router>
          <RegisterForm />;
        </Router>
      </div>
    );

    inputUsername = screen.getByTestId("Username");
    inputEmail = screen.getByTestId("Email");
    inputPassword = screen.getByTestId("Password");
    inputConfirmPassword = screen.getByTestId("Confirm password");
    button = screen.getByRole("button");
  });

  // RENDERIZADO DE COMPONENTES
  test("0. Render components successfully", async () => {
    expect.toBeInTheDocument(screen.getByTestId("Username"));
    expect.toBeInTheDocument(screen.getByTestId("Email"));
    expect.toBeInTheDocument(screen.getByTestId("Password"));
    expect.toBeInTheDocument(screen.getByTestId("Confirm password"));
    expect.toBeInTheDocument(screen.getByRole("button"));

    expect(alert);
  });

  // TODOS LOS CAMPOS
  test("1. New user with all fields completed", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert);
  });
  // CAMPOS REQUERIDOS
  test("2. New user without username", async () => {
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un usuario");
  });

  test("3. New user without email", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Ingrese un email");
  });

  test("4. New user without password and with full password confirmation", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Ingrese una contraseña");
  });

  test("5. New user without password and without full password confirmation", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Ingrese una contraseña");
  });

  test("6. New user without password confirmation", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Reingrese su contraseña");
  });

  // CAMPO OPCIONAL
  test("7. New user without avatar", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert);
  });

  // NOMBRE DE USUARIO
  test("9. Alert for exceeding user name length", async () => {
    userEvent.type(inputUsername, "Rocolo1234567890a");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "El campo username puede tener a lo sumo 16 caracteres"
    );
  });

  test("10. Alerta por pobre longitud de nombre de usuario", async () => {
    userEvent.type(inputUsername, "Ro");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "El campo username debe tener al menos 3 caracteres"
    );
  });

  // EMAIL
  test("11. Alerta por email sin símbolo @", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lalaasdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("El formato del email es incorrecto");
  });

  // CONTRASEÑA
  test("12. Alerta por contraseña sin mayuscula", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "soyunmaestro123");
    userEvent.type(inputConfirmPassword, "soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  test("13. Alerta por contraseña sin minuscula", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "SOYUNMAESTRO123");
    userEvent.type(inputConfirmPassword, "SOYUNMAESTRO123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  test("14. Alerta por contraseña sin numero", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro");
    userEvent.type(inputConfirmPassword, "Soyunmaestro");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  test("15. Alerta por contraseña con pobre longitud", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soy1");
    userEvent.type(inputConfirmPassword, "Soy1");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  // CONFIRMAR CONTRASEÑA
  test("16. Alerta por no coincidencia entre las contraseñas", async () => {
    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro12");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Las contraseñas no coinciden");
  });

  test("17. Error de server", async () => {
    server.use(
      rest.post("http://localhost:8000/signup", async (req, res, ctx) => {
        return res.once(ctx.status(401), ctx.json({detail: "Server error"}));
      })
    );

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    userEvent.click(button);

    const alert = await screen.findByRole("alertServer");

    expect(alert).toBeInTheDocument();
  });
});
