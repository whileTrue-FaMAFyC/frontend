import mockAxios from "axios";
import {gamesMock} from "../__mocks__";
import {getGames} from "../services";

describe("Listar partidas", () => {
  it("Los nombres de partidas estan en el documento", async () => {
    mockAxios.get.mockResolvedValue({
      data: gamesMock,
    });

    const games = await getGames();

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_KEY}games`
    );
    expect(games.data).toEqual(gamesMock);
  });
});
