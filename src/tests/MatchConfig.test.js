import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormPartidaConfig from "../components/GameConfig/MatchConfig";
import {server} from "../__mocks__/server.js";
import {rest} from "msw";
import {setupServer} from "msw/node";
import {robotsMock} from "../__mocks__/robots";
import mockAxios from "axios";

describe("Configuracion de partida test", () => {
  beforeEach(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const jsdomAlert = window.alert;
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

  beforeEach(async () => {
    mockAxios.get.mockResolvedValue({data: robotsMock});
    render(<FormPartidaConfig />);

    await waitFor(() => {
      robotsMock.forEach(({name}) => {
        expect(screen.getByText("Soyunrobot")).toBeInTheDocument();
      });
    });

    inputName = screen.getByTestId("name");
    inputPassword = screen.getByTestId("password");
    inputMinPlayers = screen.getByTestId("minPlayers");
    inputMaxPlayers = screen.getByTestId("maxPlayers");
    inputNGames = screen.getByTestId("nGames");
    inputNRounds = screen.getByTestId("nRounds");
    inputNameRobot = screen.getByTestId("nameRobot");
    button = screen.getByRole("button");
  });

  test("0. Render components successfully", async () => {
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

  test("1. New match with all fields completed", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "3");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert).toHaveTextContent("The match was created successfully.");
  });

  // CAMPOS REQUERIDOS
  test("2. New match without name", async () => {
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Name is required.");
  });

  test("3. New match without number of games", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Number of games is required.");
  });

  test("4. New match without number of rounds", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Number of rounds is required.");
  });

  test("5. New match without robot", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Robot is required.");
  });

  test("6. New match with default minimum players (without selecting)", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");
    expect(inputMinPlayers).toHaveValue("2");
    expect(alert).toHaveTextContent("The match was created successfully.");
  });

  test("7. New match with default maximum players (without selecting)", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");
    expect(inputMaxPlayers).toHaveValue("2");
    expect(alert).toHaveTextContent("The match was created successfully.");
  });

  // CAMPOS OPCIONALES
  test("8. New match without password", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertSuccess");

    expect(alert).toHaveTextContent("The match was created successfully.");
  });

  // NOMBRE DE PARTIDA
  test("9. New match with name exceeded", async () => {
    userEvent.type(inputName, "RocoloGames123456");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "The name must have at most 16 characters."
    );
  });

  test("10. New match with a very small name", async () => {
    userEvent.type(inputName, "RO");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "The name must have at least 3 characters."
    );
  });

  // CONTRASEÑA
  test("11. New match with password exceeded", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "AwitaDeCoco123123");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "The password must have at most 16 characters."
    );
  });

  // MAXIMO DE JUGADORES
  test("12. New match with maximum players less than minimum", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "3");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent(
      "The maximum number of players must be greater than or equal to the minimum established."
    );
  });

  // NUMERO DE JUEGOS
  test("13. New match with letters in number of games", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2a");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 200.");
  });

  test("14. New match with negative numbers in number of games", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "-2");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 200.");
  });

  test("15. New match with excessive number of games", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "201");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 200.");
  });

  test("16. New match with 0 number of games", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "0");
    userEvent.type(inputNRounds, "5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 200.");
  });

  // NUMERO DE RONDAS
  test("17. New match with letters in number of rounds", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "4a");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 10000.");
  });

  test("18. New match with negative numbers in number of rounds", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "-5");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 10000.");
  });

  test("19. New match with excessive number of rounds", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "10001");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 10000.");
  });

  test("20. New match with 0 number of rounds", async () => {
    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "0");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertError");

    expect(alert).toHaveTextContent("Enter an integer between 1 and 10000.");
  });

  test("21. Server error", async () => {
    server.use(
      rest.post(
        `${process.env.REACT_APP_API_KEY}matches/new-match`,
        async (req, res, ctx) => {
          return res.once(ctx.status(401), ctx.json({detail: "Server error"}));
        }
      )
    );

    userEvent.type(inputName, "RocoloGames");
    userEvent.type(inputPassword, "UWU");
    userEvent.selectOptions(inputMinPlayers, "2");
    userEvent.selectOptions(inputMaxPlayers, "2");
    userEvent.type(inputNGames, "2");
    userEvent.type(inputNRounds, "2");
    userEvent.selectOptions(inputNameRobot, "Soyunrobot");

    userEvent.click(button);

    const alert = await screen.findByRole("alertServer");

    expect(alert).toBeInTheDocument();
  });
});
