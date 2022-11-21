import mockAxios from "axios";
import {BrowserRouter} from "react-router-dom";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import {gamesMock} from "../__mocks__";
import userEvent from "@testing-library/user-event";
import {ListGames} from "../components";
import {act} from "react-dom/test-utils";

describe("Listar partidas", () => {
  it("Los nombres de partidas estan en el documento", async () => {
    mockAxios.get.mockResolvedValue({data: gamesMock});
    render(
      <BrowserRouter>
        <ListGames />
      </BrowserRouter>
    );
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_KEY}matches/list-matches?is_owner=None&is_joined=None&started=None`,
      {
        headers: {
          Authorization: localStorage.getItem("user"),
        },
      }
    );

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      gamesMock.forEach(({name}) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });

  it("No hay partidas disponibles", async () => {
    mockAxios.get.mockResolvedValue({data: []});
    render(
      <BrowserRouter>
        <ListGames />
      </BrowserRouter>
    );

    waitFor(() =>
      expect(screen.findByText("No games availables")).toBeInTheDocument()
    );
    // await waitFor(() => {
    //   expect(screen.getByText("Match list")).toBeInTheDocument();
    //   expect(screen.getByText("No games availables")).toBeInTheDocument();
    // });
  });

  it("El usuario refresca la lista de partidas", async () => {
    mockAxios.get.mockResolvedValue({data: gamesMock});
    render(
      <BrowserRouter>
        <ListGames />
      </BrowserRouter>
    );

    act(() =>
      userEvent.click(screen.getByRole("button", {name: "Apply filters"}))
    );

    //userEvent.click(buttonRefresh);
    const progress = screen.getByTestId("list-progress");

    expect(progress).toBeInTheDocument();
    await waitFor(() => {
      expect(progress).not.toBeInTheDocument();
      expect(mockAxios.get).toHaveBeenCalledTimes(2);
      gamesMock.forEach(({name}) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });
});
