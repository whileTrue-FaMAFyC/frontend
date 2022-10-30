import WS from "jest-websocket-mock";
import {render, cleanup, screen} from "@testing-library/react";
import MatchProvider from "../contexts/MatchContext";
import {responseNewPlayer} from "../__mocks__";
import {Match} from "../pages";

describe("Match test", () => {
  const URL_SOCKET = process.env.REACT_APP_WEB_SOCKET;
  let server;

  beforeEach(async () => {
    server = new WS(URL_SOCKET);
    render(
      <MatchProvider>
        <Match />
      </MatchProvider>
    );
  });

  afterEach(() => {
    cleanup();
    WS.clean();
  });

  it("El creador de la partida ingresa al lobby", async () => {
    expect(screen.getByText("Host")).toBeInTheDocument();
  });

  it("Se une un jugador a la partida y el host recibe el evento", async () => {
    let host = new WebSocket(URL_SOCKET);
    await server.connect;

    let message = null;
    host.onmessage = (e) => {
      message = JSON.parse(e.data);
    };

    server.send(JSON.stringify(responseNewPlayer));

    expect(message).toEqual(responseNewPlayer);
    expect(await screen.findByText(message.player.name)).toBeInTheDocument();
  });
});
