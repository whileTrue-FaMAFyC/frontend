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

    await waitFor(() => {
      gamesMock.forEach(({name}) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });
});
