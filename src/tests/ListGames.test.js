import mockAxios from "axios";
import {ListGames} from "../components";
import {gamesMock} from "../__mocks__";
import {render, screen, waitFor} from "@testing-library/react";

describe("Listar partidas", () => {
  it("Los nombres de partidas estan en el documento", async () => {
    mockAxios.get.mockResolvedValue({
      data: gamesMock,
    });

    render(<ListGames />);

    expect(mockAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_KEY}matches/list-matches`
    );

    await waitFor(() => {
      gamesMock.forEach(({match_info}) => {
        expect(screen.getByText(match_info.name)).toBeInTheDocument();
      });
    });
  });
});
