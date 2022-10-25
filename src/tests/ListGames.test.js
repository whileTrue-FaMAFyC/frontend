import mockAxios from "axios";
import {render, screen, waitFor} from "@testing-library/react";
import {gamesMock} from "../__mocks__";
import {ListGames} from "../components";

describe("Listar partidas", () => {
  it("Los nombres de partidas estan en el documento", async () => {
    mockAxios.get.mockResolvedValue({data: gamesMock});

    render(<ListGames />);

    expect(mockAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_KEY}matches/list-matches`,
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
    render(<ListGames />);
    expect(await screen.findByText("No games availables")).toBeInTheDocument();
  });
});
