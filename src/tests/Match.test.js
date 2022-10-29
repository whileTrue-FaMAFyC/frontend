import WS from "jest-websocket-mock";
import {render, cleanup, screen, waitFor} from "@testing-library/react";
import {
  responseNewMatch,
  responseJoinLobby,
  responseNewPlayer,
} from "../__mocks__";
import {Match} from "../pages";

describe("Match test", () => {
  const URL_SOCKET = process.env.REACT_APP_WEB_SOCKET;
  let server;

  beforeEach(async () => {
    server = new WS(URL_SOCKET);
    render(<Match />);
  });

  afterEach(() => {
    cleanup();
    WS.clean();
  });

  it("Nuevo juego", async () => {
    const client = new WebSocket(URL_SOCKET);
    await server.connected;

    let message = null;
    client.onmessage = (e) => {
      message = JSON.parse(e.data);
    };

    server.send(JSON.stringify(responseNewMatch));

    expect(message).toEqual(responseNewMatch);
    expect(await screen.findByText(message.host.name)).toBeInTheDocument();
    screen.debug();
  });

  it("Ingresa una persona a la sala", async () => {
    const newPlayer = new WebSocket(URL_SOCKET);
    await server.connected;

    let messageNewPlayer = null;
    newPlayer.onmessage = (e) => {
      messageNewPlayer = JSON.parse(e.data);
    };

    server.send(JSON.stringify(responseJoinLobby));

    expect(messageNewPlayer).toEqual(responseJoinLobby);

    await waitFor(() => {
      responseJoinLobby.players.forEach(({name}) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
    screen.debug();
  });

  it("Un jugador que no es el host se une a la partida", async () => {
    const host = new WebSocket(URL_SOCKET);
    await server.connected;

    let messageHost = null;
    host.onmessage = (e) => {
      messageHost = JSON.parse(e.data);
    };

    //Mandamos un evento al host al crear el lobby
    server.send(JSON.stringify(responseNewMatch));
    expect(messageHost).toEqual(responseNewMatch);
    expect(screen.getByText(messageHost.host.name)).toBeInTheDocument();

    //Mandamos un evento al host cuando un nuevo jugador se une
    server.send(JSON.stringify(responseNewPlayer));
    expect(messageHost).toEqual(responseNewPlayer);
    expect(screen.getByText(messageHost.player.name)).toBeInTheDocument();

    screen.debug();
  });
});
