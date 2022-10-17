import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormPartidaConfig from "../components/GameConfig";
import {server} from "../__mocks__/server.js";
import {todoOk_201, todoMal_400} from "../__mocks__/handlers";

// NO SE PUEDEN TESTEAR LOS INPUTS NUMERICOS
// REVISAR TEST 1 - 6 - 8

describe("Configuracion de partida test", () => {
  beforeEach(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const jsdomAlert = window.alert; // remember the jsdom alert
  window.alert = (e) => {
    console.log(e);
  };

  // DECLARACION DE VARIABLES
  let inputName;
  let inputPassword;
  let inputMinPlayers;
  let inputMaxPlayers;
  let inputNGames;
  let inputNRounds;
  let inputNameRobot;
  let button;

  beforeEach(() => {
    render(<FormPartidaConfig />);

    inputName = screen.getByTestId("name");
    inputPassword = screen.getByTestId("password");
    inputMinPlayers = screen.getByTestId("minPlayers");
    inputMaxPlayers = screen.getByTestId("maxPlayers");
    inputNGames = screen.getByTestId("nGames");
    inputNRounds = screen.getByTestId("nRounds");
    inputNameRobot = screen.getByTestId("nameRobot");
    button = screen.getByRole("button");
  });

  test("0. Renderizado del componente", async () => {
    expect.toBeInTheDocument(screen.getByTestId("name"));
    expect.toBeInTheDocument(screen.getByTestId("password"));
    expect.toBeInTheDocument(screen.getByTestId("minPlayers"));
    expect.toBeInTheDocument(screen.getByTestId("maxPlayers"));
    expect.toBeInTheDocument(screen.getByTestId("nGames"));
    expect.toBeInTheDocument(screen.getByTestId("nRounds"));
    expect.toBeInTheDocument(screen.getByTestId("nameRobot"));
    expect.toBeInTheDocument(screen.getByRole("button"));

    expect(alert);
  });

  test("1. Nueva partida con todos los campos llenos", async () => {
    server.use(todoOk_201);

    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "3");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert).toHaveTextContent("La partida se creó exitosamente");
  });

  // CAMPOS REQUERIDOS
  test("2. Nueva partida sin nombre", async () => {
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un nombre para la partida");
  });

  test("3. Nueva partida sin número de juegos", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese el numero de juegos");
  });

  test("4. Nueva partida sin número de rondas", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese el numero de rondas");
  });

  test("5. Nueva partida sin robot asignado", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un robot");
  });

  test("6. Nueva partida con minimo de jugadores default (sin seleccionar)", async () => {
    server.use(todoOk_201);

    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");
    expect(inputMinPlayers).toHaveValue("2");
    expect(alert).toHaveTextContent("La partida se creó exitosamente");
  });

  test("7. Nueva partida con maximo de jugadores default (sin seleccionar)", async () => {
    server.use(todoOk_201);

    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");
    expect(inputMaxPlayers).toHaveValue("2");
    expect(alert).toHaveTextContent("La partida se creó exitosamente");
  });

  // CAMPOS OPCIONALES
  test("8. Nueva partida sin contraseña", async () => {
    server.use(todoOk_201);

    userEvent.type(inputName, "RocoloGames");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert).toHaveTextContent("La partida se creó exitosamente");
  });

  // NOMBRE DE PARTIDA
  test("9. Nueva partida con nombre excedido", async () => {
    userEvent.type(inputName, "RocoloGames123456");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "El nombre debe tener a lo sumo 16 caracteres"
    );
  });

  test("10. Nueva partida con nombre muy chiquito", async () => {
    userEvent.type(inputName, "RO");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "El nombre debe tener al menos 3 caracteres"
    );
  });

  // CONTRASEÑA
  test("11. Nueva partida con contraseña excedida", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "AwitaDeCoco123123");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "La contraseña debe tener a lo sumo 16 caracteres"
    );
  });

  // MAXIMO DE JUGADORES
  test("12. Nueva partida con maximo de jugadores menor al minimo", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "3");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "El máximo de jugadores debe ser mayor o igual al mínimo establecido"
    );
  });

  // NUMERO DE JUEGOS
  test("13. Nueva partida con letras en numero de juegos", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2a");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 200");
  });

  test("14. Nueva partida con numeros negativos en numero de juegos", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "-2");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 200");
  });

  test("15. Nueva partida con numero de juegos excesivo", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "201");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 200");
  });

  test("16. Nueva partida con 0 numero de juegos", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "0");
    userEvent.type(inputNRounds, "5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 200");
  });

  // NUMERO DE RONDAS
  test("17. Nueva partida con letras en numero de rondas", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "4a");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 10000");
  });

  test("18. Nueva partida con numeros negativos en numero de rondas", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "-5");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 10000");
  });

  test("19. Nueva partida con numero de rondas excesivo", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "10001");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 10000");
  });

  test("20. Nueva partida con 0 numero de rondas", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "0");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Ingrese un número entero entre 1 y 10000");
  });

  test("21. Error de server", async () => {
    server.use(todoMal_400);

    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "2");
    userEvent.type(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertServer");

    expect(alert).toBeInTheDocument();
  });
});
