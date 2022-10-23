import mockAxios from "axios";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {FormUserVerify} from "../components";

describe("Componente de verificacion de codigo", () => {
  let input;
  let error;
  let url = `${process.env.REACT_APP_API_KEY}verifyuser/${localStorage.getItem(
    "username"
  )}`;
  let verification_code = "123456";
  let successMsg = "Account verified successfully";
  let notSuccessMsg = "User already verified";
  let notSuccessMsg2 = "Wrong verification code";

  beforeEach(() => {
    render(<FormUserVerify />);
    input = screen.getByTestId("code");
    error = screen.getByTestId("code-error");
  });

  afterEach(cleanup);
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Deberia aparecer un error al ingresar mas de 6 digitos", async () => {
    userEvent.type(input, "1234567");
    await waitFor(() => {
      expect(error).toHaveTextContent("The code is 6 digits");
    });
  });

  it("Deberia aparecer un error al escribir menos de 6 digitos", async () => {
    userEvent.type(input, "1234");
    await waitFor(() => {
      expect(error).toHaveTextContent("The code is 6 digits");
    });
  });

  it("El usuario verifica su cuenta con exito", async () => {
    mockAxios.put.mockResolvedValue({
      data: {detail: successMsg},
    });

    userEvent.type(input, verification_code);

    await waitFor(() => {
      expect(screen.getByTestId("success")).toHaveTextContent(successMsg);
      expect(mockAxios.put).toHaveBeenCalledTimes(1);
      expect(mockAxios.put).toHaveBeenCalledWith(url, {
        verification_code,
      });
    });
  });

  it("El usuario ya esta verificado", async () => {
    mockAxios.put.mockRejectedValue({
      response: {data: {detail: notSuccessMsg}},
    });

    userEvent.type(input, verification_code);

    await waitFor(() => {
      expect(mockAxios.put).toHaveBeenCalledTimes(1);
      expect(mockAxios.put).toHaveBeenCalledWith(url, {
        verification_code,
      });
      expect(screen.getByTestId("error")).toHaveTextContent(notSuccessMsg);
    });
  });

  it("El codigo es invalido", async () => {
    mockAxios.put.mockRejectedValue({
      response: {data: {detail: notSuccessMsg2}},
    });

    userEvent.type(input, verification_code);

    await waitFor(() => {
      expect(screen.getByTestId("error")).toHaveTextContent(notSuccessMsg2);
      expect(mockAxios.put).toHaveBeenCalledTimes(1);
      expect(mockAxios.put).toHaveBeenCalledWith(url, {
        verification_code,
      });
    });
  });
});
