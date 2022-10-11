import {render, screen, waitFor} from "@testing-library/react";
import {gamesMock} from "../__mocks__";
import {ListGames} from "../components";

describe("Listar partidas", () => {
  beforeEach(() => {
    render(<ListGames />);
  });

  it("Los nombres de partidas estan en el documento", async () => {
    await waitFor(() => {
      gamesMock.forEach(({name}) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });
});

//await waitForElementToBeRemoved(() =>screen.getByText("Loading"))
