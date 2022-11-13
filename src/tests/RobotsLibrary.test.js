import mockAxios from "axios";
import {render, screen, waitFor} from "@testing-library/react";
import {RobotsLibrary} from "../components";
import {robotsMock} from "../__mocks__/robots";
import {BrowserRouter as Router, Link} from "react-router-dom";

describe("Robot library test", () => {
  test("Los nombres de partidas estan en el documento", async () => {
    mockAxios.get.mockResolvedValue({data: robotsMock});

    render(
      <div>
        <Router>
          <RobotsLibrary />
        </Router>
      </div>
    );

    expect(mockAxios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_KEY}list-robots`,
      {
        headers: {
          Authorization: localStorage.getItem("user"),
        },
      }
    );

    expect(mockAxios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      robotsMock.forEach(({name}) => {
        expect(screen.getByText(name)).toBeInTheDocument();
      });
    });
  });

  it("No hay partidas disponibles", async () => {
    mockAxios.get.mockResolvedValue({data: []});
    render(
      <div>
        <Router>
          <RobotsLibrary />
        </Router>
      </div>
    );
    expect(await screen.findByText("No robots availables")).toBeInTheDocument();
  });
});
