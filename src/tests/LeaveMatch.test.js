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
  let leaveB;
  let joinB;

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

    leaveB = screen.getByTestId("leaveButton");
    joinB = screen.getByTestId("joinButton");
  });

  test("0. Render components successfully", async () => {
    expect.toBeInTheDocument(screen.getByTestId("name"));
    expect.toBeInTheDocument(screen.getByTestId("password"));
    expect.toBeInTheDocument(screen.getByTestId("minPlayers"));
    expect.toBeInTheDocument(screen.getByTestId("maxPlayers"));
    expect.toBeInTheDocument(screen.getByTestId("nGames"));
    expect.toBeInTheDocument(screen.getByTestId("nRounds"));
    expect.toBeInTheDocument(screen.getByTestId("nameRobot"));
    expect.toBeInTheDocument(leaveB);
    expect.toBeInTheDocument(joinB);

    expect(leaveB).toHaveTextContent("Leave");
    expect(joinB).toHaveTextContent("Join");
  });

  test("1. Click on leave by not joined user", async () => {});

  test("2. Click on leave by joined user", async () => {});
});
