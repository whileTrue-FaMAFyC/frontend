import mockAxios from "axios";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {FormUserVerify} from "../components";

describe("Componente de verificacion de codigo", () => {
  let button;
  let input;
  let error;

  afterEach(cleanup);
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    render(<FormUserVerify />);
    button = screen.getByRole("button");
    input = screen.getByTestId("code");
    error = screen.getByTestId("code-error");
  });

  it("Deberia aparecer un error al ingresar mas de 6 digitos", async () => {
    userEvent.type(input, "1234567");
    await waitFor(() => {
      expect(error).toHaveTextContent("El codigo es de 6 digitos");
    });
  });

  it("Deberia aparecer un error al escribir menos de 6 digitos", async () => {
    userEvent.type(input, "1234");
    await waitFor(() => {
      expect(error).toHaveTextContent("El codigo es de 6 digitos");
    });
  });

  it("El usuario verifica su cuenta con exito", async () => {
    mockAxios.put.mockResolvedValue({
      data: {detail: "account verified successfully", status: 200},
    });

    userEvent.type(input, "123456");
    userEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("account verified successfully")
      ).toBeInTheDocument();
    });
  });

  it("El usuario ya esta verificado", async () => {
    mockAxios.put.mockRejectedValue({
      response: {data: {detail: "user already verified"}},
    });
    userEvent.type(input, "123456");
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("user already verified")).toBeInTheDocument();
    });
  });
});
