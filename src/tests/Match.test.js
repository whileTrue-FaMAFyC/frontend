import WS from "jest-websocket-mock";
import {render, cleanup, screen, waitFor} from "@testing-library/react";
import {responseNewPlayer, responseNewMatch} from "../__mocks__";
import {Match} from "../pages";
import mockAxios from "axios";

describe("Match test", () => {
  const URL_SOCKET = process.env.REACT_APP_WEB_SOCKET;
  let server;

  beforeEach(async () => {
    server = new WS(URL_SOCKET);
    /*     server.close(); */
  });

  afterEach(() => {
    cleanup();
    WS.clean();
  });

  /*   it("El creador de la partida ingresa al lobby", async () => {
    mockAxios.get.mockResolvedValue({data: responseNewMatch});
    render(<Match />);

    await waitFor(() => {
      expect(screen.getByText(responseNewMatch.host)).toBeInTheDocument();
    });
    screen.debug();
  }); */

  it("Se une un jugador a la partida y el host recibe el evento", async () => {
    mockAxios.get.mockResolvedValue({data: responseNewMatch});
    let host = new WebSocket(URL_SOCKET);
    await server.connect;

    render(<Match />);

    let message = null;
    host.onmessage = (e) => {
      message = JSON.parse(e.data);
    };

    setTimeout(() => {
      server.send(JSON.stringify(responseNewPlayer));
    }, 300);

    await waitFor(() => {
      expect(screen.getByText("El pepe")).toBeInTheDocument();
      expect(message).toEqual(responseNewPlayer);
      expect(screen.getByText("Host")).toBeInTheDocument();
    });

    screen.debug();
  });
});
