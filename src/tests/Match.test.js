import WS from "jest-websocket-mock";
import {render, cleanup, screen, waitFor} from "@testing-library/react";
import {
  joinLobby,
  join,
  leave,
  joinLobby2,
  joinLobby3,
  results,
} from "../__mocks__";
import {Match} from "../pages";
import mockAxios from "axios";
import userEvent from "@testing-library/user-event";

describe("Match test", () => {
  let server;
  let match_id = undefined;
  const URL_SOCKET = `${
    process.env.REACT_APP_WEB_SOCKET
  }matches/ws/follow-lobby/${match_id}?authorization=${localStorage.getItem(
    "user"
  )}`;

  beforeEach(() => {
    server = new WS(URL_SOCKET);
  });

  afterEach(() => {
    cleanup();
    WS.clean();
  });

  // it("El creador de la partida ingresa al lobby", async () => {
  //   mockAxios.get.mockResolvedValue({data: joinLobby});
  //   render(<Match />);

  //   await waitFor(() => {
  //     expect(mockAxios.get).toHaveBeenCalledTimes(1);
  //     expect(screen.getByText(joinLobby.name)).toBeInTheDocument();
  //     joinLobby.user_robot.forEach((user) => {
  //       let users = screen.getAllByText(user.username);
  //       users.forEach((user) => {
  //         expect(user).toBeInTheDocument();
  //       });
  //       expect(screen.getByText(user.robot_name)).toBeInTheDocument();
  //     });
  //   });
  // });

  it("Se une un jugador a la partida y el host recibe el evento", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      expect(screen.getByText(joinLobby.name)).toBeInTheDocument();
      server.send(JSON.stringify(join));
    });

    expect(screen.queryByText(join.data.username)).toBeInTheDocument();
  });

  it("Un jugador sale del lobby y se le avisa a los demas jugadores", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby2});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      expect(screen.getByText(joinLobby2.name)).toBeInTheDocument();
      server.send(JSON.stringify(leave));
    });

    expect(screen.queryByText(leave.data.username)).not.toBeInTheDocument();
  });

  it("La partida termino y se le muestran los resultados a los jugadores", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby2});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      expect(screen.getByText(joinLobby2.name)).toBeInTheDocument();
      server.send(JSON.stringify(results));
    });

    expect(await screen.findByTestId("user_winner")).toHaveTextContent(
      results.data.winners[0].username
    );
  });

  it("Se inicia la partida", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby2});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      expect(screen.getByText(joinLobby2.name)).toBeInTheDocument();
      server.send(JSON.stringify({action: "start"}));
    });

    await waitFor(() => {
      expect(screen.getByText("start")).toBeInTheDocument();
    });
  });

  it("Creador puede iniciar partida", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby3});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      expect(screen.getByTestId("Start")).toBeInTheDocument();
      // expect(screen.)
    });
  });

  it("Creador puede iniciar partida", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby2});

    await server.connect;

    render(<Match />);

    await waitFor(() => {
      console.log(screen.getByTestId("Start"));
      expect(screen.getByTestId("Start")).toBeInTheDocument();
    });
  });
});
