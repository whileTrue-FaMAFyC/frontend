import {getByPlaceholderText, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "../components/Reg";

describe("Formulario test", () => {
  // RENDERIZADO DE COMPONENTES
  test("0. Renderizado del componente", async () => {
    render(<Formulario />);

    expect.toBeInTheDocument(screen.getByLabelText("Username"));
    expect.toBeInTheDocument(screen.getByLabelText("Email"));
    expect.toBeInTheDocument(screen.getByLabelText("Password"));
    expect.toBeInTheDocument(screen.getByLabelText("Confirm password"));
    expect.toBeInTheDocument(screen.getByLabelText(/Avatar/i));
    expect.toBeInTheDocument(screen.getByRole("button"));

    expect(alert);
  });

  // TODOS LOS CAMPOS
  test("1. Nuevo usuario con todos los campos llenos", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const av = new File(["holis"], "aaavatar.pdf", {type: "image/png"});

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert);
  });
  // CAMPOS REQUERIDOS
  test("2. Nuevo usuario sin nombre de usuario", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const av = new File(["holis"], "aaavatar.pdf", {type: "image/png"});

    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un usuario");
  });

  test("3. Nuevo usuario sin email", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const av = new File(["holis"], "aaavatar.pdf", {type: "image/png"});

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Ingrese un email");
  });

  test("4. Nuevo usuario sin contraseña y con confirmacion de contraseña lleno", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const av = new File(["holis"], "aaavatar.pdf", {type: "image/png"});

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Ingrese una contraseña");
  });

  test("5. Nuevo usuario sin contraseña y sin confirmacion de contraseña lleno", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const av = new File(["holis"], "aaavatar.pdf", {type: "image/png"});

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Ingrese una contraseña");
  });

  test("6. Nuevo usuario sin confirmacion de contraseña ", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const av = new File(["holis"], "aaavatar.pdf", {type: "image/png"});

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Reingrese su contraseña");
  });

  // CAMPO OPCIONAL
  test("7. Nuevo usuario sin avatar (con campos opcionales vacíos)", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert);
  });

  // AVATAR
  test("8. Alerta por avatar con extensión invalida", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");
    const av = new File(["holis"], "aaavatar.pdf", {type: "application/pdf"});

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const input = screen.getByLabelText(/Avatar/i);
    userEvent.upload(input, av);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La extension del archivo es incorrecta, el archivo debe ser .png"
    );
  });
  // NOMBRE DE USUARIO
  test("9. Alerta por superar longitud de nombre de usuario", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo1234567890a");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "El campo username puede tener a lo sumo 16 caracteres"
    );
  });

  test("10. Alerta por pobre longitud de nombre de usuario", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Ro");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "El campo username debe tener al menos 3 caracteres"
    );
  });

  // EMAIL
  test("11. Alerta por email sin símbolo @", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lalaasdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro123");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("El formato del email es incorrecto");
  });

  // CONTRASEÑA
  test("12. Alerta por contraseña sin mayuscula", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "soyunmaestro123");
    userEvent.type(inputConfirmPassword, "soyunmaestro123");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  test("13. Alerta por contraseña sin minuscula", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "SOYUNMAESTRO123");
    userEvent.type(inputConfirmPassword, "SOYUNMAESTRO123");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  test("14. Alerta por contraseña sin numero", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro");
    userEvent.type(inputConfirmPassword, "Soyunmaestro");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  test("15. Alerta por contraseña con pobre longitud", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soy1");
    userEvent.type(inputConfirmPassword, "Soy1");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent(
      "La contraseña debe contener al menos 8 caracteres, una mayúscula, minúscula y número"
    );
  });

  // CONFIRMAR CONTRASEÑA
  test("16. Alerta por no coincidencia entre las contraseñas", async () => {
    render(<Formulario />);

    const inputUsername = screen.getByLabelText("Username");
    const inputEmail = screen.getByLabelText("Email");
    const inputPassword = screen.getByLabelText("Password");
    const inputConfirmPassword = screen.getByLabelText("Confirm password");

    userEvent.type(inputUsername, "Rocolo");
    userEvent.type(inputEmail, "lala@asdsad.com");
    userEvent.type(inputPassword, "Soyunmaestro123");
    userEvent.type(inputConfirmPassword, "Soyunmaestro12");

    const button = screen.getByRole("button");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Las contraseñas no coinciden");
  });

  // TESTS QUE FALTAN:
  // CHEQUEAR QUE LLEGUE DEL BACK NOMBRE DE USUARIO EN USO CUANDO YA EXISTA EL QUE LE PASO
  // CHEQUEAR QUE LLEGUE DEL BACK EMAIL EN USO CUANDO YA EXISTA EL QUE LE PASO
  // PREGUNTARLE A TONI SI SE LE OCURRE ALGUN OTRO SOBRE LA INTERACCION CON EL BACK
});
