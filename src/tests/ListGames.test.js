import {render, screen} from "@testing-library/react";
import ListGames from "../components/ListGames/ListGames";

describe("Listar partidas", () => {
  beforeEach(() => {
    render(<ListGames />);
  });

  test("El componente se encuentra en el documento", async () => {
    let container = screen.getByText("Lista de partidas").parentNode;
    expect(container).toBeInTheDocument();
  });

  test("Los nombres de partidas estan en el documento", async () => {
    const name10 = await screen.findByText("game10");
    const name11 = await screen.findByText("game11");
    expect(name10).toBeInTheDocument();
    expect(name11).toBeInTheDocument();
  });
});
