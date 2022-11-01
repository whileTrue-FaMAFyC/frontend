import WS from "jest-websocket-mock";
import {render, cleanup, screen, waitFor} from "@testing-library/react";
import {joinLobby, join, leave, joinLobby2} from "../__mocks__";
import {Match} from "../pages";
import mockAxios from "axios";

describe("Match test", () => {
  let server;
  const URL_SOCKET = process.env.REACT_APP_WEB_SOCKET;

  beforeEach(() => {
    server = new WS(URL_SOCKET);
  });

  afterEach(() => {
    cleanup();
    WS.clean();
  });

  it("El creador de la partida ingresa al lobby", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby});
    render(<Match />);

    await waitFor(() => {
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(screen.getByText(joinLobby.name)).toBeInTheDocument();
      joinLobby.user_robot.forEach((user) => {
        let users = screen.getAllByText(user.username);
        users.forEach((user) => {
          expect(user).toBeInTheDocument();
        });
        expect(screen.getByText(user.robot_name)).toBeInTheDocument();
      });
    });
  });

  it("Se une un jugador a la partida y el host recibe el evento", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      expect(screen.getByText("partida")).toBeInTheDocument();
      server.send(JSON.stringify(join));
    });

    expect(screen.queryByText(join.data.username)).toBeInTheDocument();
    screen.debug();
  });

  it("test leave", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby2});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      expect(screen.getByText("partida")).toBeInTheDocument();
      server.send(JSON.stringify(leave));
    });

    expect(screen.queryByText(leave.data.username)).not.toBeInTheDocument();
  });
});
