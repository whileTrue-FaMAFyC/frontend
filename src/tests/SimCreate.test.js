import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SimCreate from "../components/SimCreate/SimCreate";
import {server} from "../__mocks__/server.js";
import {rest} from "msw";
import {robotsMock} from "../__mocks__/robots";
import mockAxios from "axios";

describe("Sim Creation test", () => {
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const jsdomAlert = window.alert;
  window.alert = (e) => {
    console.log(e);
  };

  // DECLARACION DE VARIABLES
  let inputNameRobot1;
  let inputNameRobot2;
  let inputNRounds;
  let button;

  beforeEach(async () => {
    mockAxios.get.mockResolvedValue({data: robotsMock});
    render(<SimCreate />);

    await waitFor(() => {
      robotsMock.forEach(({name}) => {
        expect(screen.getAllByText("Soyunrobot"));
      });
    });

    inputNameRobot1 = await screen.findByTestId("nameRobot1");
    inputNameRobot2 = await screen.findByTestId("nameRobot2");
    inputNRounds = await screen.findByTestId("nRounds");
    button = await screen.findByTestId("submit");
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

    const inputNameRobot3 = await screen.findByTestId("nameRobot3");

    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");

    const inputNameRobot4 = await screen.findByTestId("nameRobot4");

    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");
    userEvent.type(inputNRounds, "5");

    userEvent.click(button);

    const successMessage = await screen.findByTestId("Simulation");

    expect(successMessage).toBeInTheDocument;
  });

  // CAMPOS REQUERIDOS
  test("2. New sim without robot 1", async () => {
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");

    userEvent.selectOptions(
      await screen.findByTestId("nameRobot3"),
      "Soyotrorobot"
    );

    userEvent.type(inputNRounds, "5");

    userEvent.click(button);

    const requiredRobot1 = await screen.findByTestId("requiredRobot1");

    expect(requiredRobot1).toHaveTextContent("Robot is required.");
  });

  test("3. New sim without robot 2", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyotrorobot");
    userEvent.type(inputNRounds, "5");

    userEvent.click(button);

    const requiredRobot2 = await screen.findByTestId("requiredRobot2");

    expect(requiredRobot2).toHaveTextContent("Robot is required.");
    // expect(inputRobot3).not.toBeInTheDocument;
    // expect(successMessage).not.toBeInTheDocument;
  });

  test("4. New sim without number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");

    userEvent.click(button);

    const requiredNRounds = await screen.findByTestId("requiredNRounds");

    expect(requiredNRounds).toHaveTextContent("Number of rounds is required.");
  });

  // NUMERO DE RONDAS
  test("5. New sim with letters in number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");

    const inputNameRobot3 = await screen.findByTestId("nameRobot3");

    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");

    const inputNameRobot4 = await screen.findByTestId("nameRobot4");

    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");

    userEvent.type(inputNRounds, "5a");

    userEvent.click(button);

    const valNRounds = await screen.findByTestId("valNRounds");

    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("6. New sim with negative numbers in number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");

    const inputNameRobot3 = await screen.findByTestId("nameRobot3");

    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");

    const inputNameRobot4 = await screen.findByTestId("nameRobot4");

    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");
    userEvent.type(inputNRounds, "-5");

    userEvent.click(button);

    const valNRounds = await screen.findByTestId("valNRounds");

    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("7. New sim with excessive number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyotrorobot");
    userEvent.type(inputNRounds, "5000000000");

    userEvent.click(button);

    const valNRounds = await screen.findByTestId("valNRounds");
    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("8. New sim with 0 number of rounds", async () => {
    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");
    userEvent.type(inputNRounds, "0");

    userEvent.click(button);

    const valNRounds = await screen.findByTestId("valNRounds");

    expect(valNRounds).toHaveTextContent(
      "Enter an integer between 1 and 10000."
    );
  });

  test("9. Server error", async () => {
    server.use(
      rest.post(
        `${process.env.REACT_APP_API_KEY}new-simulation`,
        async (req, res, ctx) => {
          return res.once(ctx.status(401), ctx.json({detail: "Server error"}));
        }
      )
    );

    userEvent.selectOptions(inputNameRobot1, "Soyunrobot");
    userEvent.selectOptions(inputNameRobot2, "Soyunrobot");

    const inputNameRobot3 = await screen.findByTestId("nameRobot3");

    userEvent.selectOptions(inputNameRobot3, "Soyotrorobot");

    const inputNameRobot4 = await screen.findByTestId("nameRobot4");

    userEvent.selectOptions(inputNameRobot4, "Soyunrobot");
    userEvent.type(inputNRounds, "500");

    userEvent.click(button);

    const failureMessage = await screen.findByTestId("failure");

    expect(failureMessage).toHaveTextContent("Server error");
  });
});
