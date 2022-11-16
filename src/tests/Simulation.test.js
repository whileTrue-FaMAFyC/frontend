import {render, screen, waitFor} from "@testing-library/react";
import {props} from "../__mocks__/simulation";
import Simulation from "../components/Simulation/Simulation";

describe("Simulation control test", () => {
  test("Buttons render correctly", async () => {
    render(
      <Simulation
        props={{
          names: props.names,
          simulation: props.simulation,
          winners: props.winners,
        }}
      />
    );

    const playButton = await screen.findByTestId("play");
    const stopButton = await screen.findByTestId("stop");
    const fwdButton = await screen.findByTestId("forward");
    const bwdButton = await screen.findByTestId("backward");
    const resetButton = await screen.findByTestId("reset");
    const winners = await screen.findByTestId("winners");

    expect(playButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
    expect(fwdButton).toBeInTheDocument();
    expect(bwdButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(winners).toBeInTheDocument();
  });
});
