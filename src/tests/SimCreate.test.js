import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SimCreate from "../components/SimCreate/SimCreate";
import {server} from "../__mocks__/server.js";
import {rest} from "msw";
import {robotsMock} from "../__mocks__/robots";
import mockAxios from "axios";

describe("Configuracion de simulacion test", () => {
  beforeEach(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const jsdomAlert = window.alert;
  window.alert = (e) => {
    console.log(e);
  };

  // DECLARACION DE VARIABLES
  let inputNameRobot1;
  let inputNameRobot2;
  let inputNameRobot3;
  let inputNameRobot4;
  let inputNRounds;
  let button;
  let requiredRobot1;
  let requiredRobot2;
  let requiredNRounds;
  let valNRounds;
  let successMessage;
  let failureMessage;

  beforeEach(async () => {
    mockAxios.get.mockResolvedValue({data: robotsMock});
    render(<SimCreate />);

    await waitFor(() => {
      robotsMock.forEach(({name}) => {
        expect(screen.getByText("Soyunrobot")).toBeInTheDocument();
      });
    });

    inputNameRobot1 = screen.queryByTestId("nameRobot1");
    inputNameRobot2 = screen.queryByTestId("nameRobot2");
    inputNameRobot3 = screen.queryByTestId("nameRobot3");
    inputNameRobot4 = screen.queryByTestId("nameRobot4");
    inputNRounds = screen.queryByTestId("nRounds");
    button = screen.queryByTestId("button");
    successMessage = screen.queryByTestId("success");
    failureMessage = screen.queryByTestId("failure");
    requiredRobot1 = screen.queryByTestId("requiredRobot1");
    requiredRobot2 = screen.queryByTestId("requiredRobot2");
    requiredNRounds = screen.queryByTestId("requiredNRounds");
    valNRounds = screen.queryByTestId("valNRounds");
  });

  test("0. Render components successfully", async () => {
    expect.toBeInTheDocument(inputNameRobot1);
    expect.toBeInTheDocument(inputNameRobot2);
    expect.toBeInTheDocument(inputNRounds);
    expect.toBeInTheDocument(button);
  });

  test("1. New sim with all fields completed", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");
    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");
    userEvent.type(inputNRounds, a);

    userEvent.click(button);

    expect(successMessage).toHaveTextContent(
      "The simulation is about to start!"
    );
  });

  // CAMPOS REQUERIDOS
  test("2. New match without robot 1", async () => {
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");
    userEvent.type(inputNRounds, a);

    userEvent.click(button);

    expect(requiredRobot1).toHaveTextContent("Robot is required.");
  });

  test("3. New match without robot 2", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.type(inputNRounds, a);

    userEvent.click(button);

    expect(requiredRobot2).toHaveTextContent("Robot is required.");
    expect(inputRobot3).not.toBeInTheDocument;
    expect(successMessage).not.toBeInTheDocument;
  });

  test("4. New match without number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");

    userEvent.click(button);

    expect(requiredNRounds).toHaveTextContent("Number of rounds is required.");
    expect(successMessage).not.toBeInTheDocument;
  });

  // NUMERO DE RONDAS
  test("17. New match with letters in number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");
    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");
    userEvent.type(inputNRounds, "5a");

    userEvent.click(button);

    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("18. New match with negative numbers in number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");
    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");
    userEvent.type(inputNRounds, "-5");

    userEvent.click(button);

    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("19. New match with excessive number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyotrorobot");
    userEvent.type(inputNRounds, "5000000000");

    userEvent.click(button);

    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("20. New match with 0 number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");
    userEvent.type(inputNRounds, "0");

    userEvent.click(button);

    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("21. Server error", async () => {
    server.use(
      rest.post(
        "https://63446b7ddcae733e8fdef696.mockapi.io/simCreate",
        async (req, res, ctx) => {
          return res.once(ctx.status(401), ctx.json({detail: "Server error"}));
        }
      )
    );

    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");
    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");
    userEvent.type(inputNRounds, "500");

    userEvent.click(button);

    expect(failureMessage).toHaveTextContent("Network error");
  });
});
