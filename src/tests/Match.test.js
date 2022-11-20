import WS from "jest-websocket-mock";
import {render, cleanup, screen, waitFor} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
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
import {robotsMock} from "../__mocks__";
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

  it("El creador de la partida ingresa al lobby", async () => {
    mockAxios.get.mockResolvedValue({data: joinLobby});
    render(
      <BrowserRouter>
        <Match />
      </BrowserRouter>
    );

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

  it("Un jugador entra al lobby y ve el formulario para unirse", async () => {
    await server.connect;
    mockAxios.get.mockResolvedValue({
      data: {
        creator_username: "isra",
        has_password: false,
        im_in: false,
        is_creator: false,
        max_players: 2,
        min_players: 2,
        name: "Match pro",
        num_games: 200,
        num_rounds: 10000,
        requester_username: "isra2",
        results: [],
        started: false,
        user_robot: [
          {
            username: "isra",
            user_avatar: "",
            robot_name: "Shooter",
            robot_avatar:
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…E\nREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z",
          },
        ],
        users_joined: 1,
      },
    });

    render(
      <BrowserRouter>
        <Match />
      </BrowserRouter>
    );

    await waitFor(() => {
      mockAxios.get.mockResolvedValue({data: robotsMock});

      expect(screen.getByText("Match pro")).toBeInTheDocument();
      expect(screen.getByRole("button", {name: "Join"})).toBeInTheDocument();
    });
  });

  //   mockAxios.post.mockResolvedValue({data: {}});
  //   const btn = screen.getByRole("button", {name: "Join"});
  //   const select = screen.getByTestId("nameRobot");
  //   userEvent.selectOptions(select, "* Choose a robot *");
  //   userEvent.click(btn);

  //   await waitFor(() => {});
  //   screen.debug();
  // });

  // it("Un jugador sale del lobby y se le avisa a los demas jugadores", async () => {
  //   mockAxios.get.mockResolvedValue({data: joinLobby2});

  //   await server.connect;

  //   render(<Match />);

  //   await waitFor(() => {
  //     expect(screen.getByText(joinLobby2.name)).toBeInTheDocument();
  //     server.send(JSON.stringify(leave));
  //   });

  //   expect(screen.queryByText(leave.data.username)).not.toBeInTheDocument();
  // });

  // it("La partida termino y se le muestran los resultados a los jugadores", async () => {
  //   mockAxios.get.mockResolvedValue({data: joinLobby2});

  //   await server.connect;

  //   render(<Match />);

  //   await waitFor(() => {
  //     expect(screen.getByText(joinLobby2.name)).toBeInTheDocument();
  //     server.send(JSON.stringify(results));
  //   });

  //   screen.debug();

  //   expect(await screen.findByTestId("user_winner")).toHaveTextContent(
  //     results.data.winners[0].username
  //   );
  // });

  // it("Se inicia la partida", async () => {
  //   mockAxios.get.mockResolvedValue({data: joinLobby2});

  //   await server.connect;

  //   render(<Match />);

  //   await waitFor(() => {
  //     expect(screen.getByText(joinLobby2.name)).toBeInTheDocument();
  //     server.send(JSON.stringify({action: "start"}));
  //   });

  //   await waitFor(() => {
  //     expect(screen.getByText("start")).toBeInTheDocument();
  //   });
  // });

  // it("Creador puede iniciar partida", async () => {
  //   mockAxios.get.mockResolvedValue({data: joinLobby2});

  //   await server.connect;

  //   render(<Match />);

  //   await waitFor(() => {
  //     console.log(screen.getByTestId("Start"));
  //     expect(screen.getByTestId("Start")).toBeInTheDocument();
  //   });
  // });
});
