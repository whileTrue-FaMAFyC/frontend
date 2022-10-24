import mockAxios from "axios";
import {cleanup, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {FormUserVerify} from "../components";
import {BrowserRouter as Router} from "react-router-dom";

describe("Componente de verificacion de codigo", () => {
  let msg;
  let button;
  let input;
  let error;

  let url = `${process.env.REACT_APP_API_KEY}verifyuser/${localStorage.getItem(
    "username"
  )}`;
  let verification_code = "123456";
  let successMsg = "account verified successfully";
  let notSuccessMsg = "user already verified";
  let notSuccessMsg2 = "wrong verification code";

  afterEach(cleanup);
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    render(
      <div>
        <Router>
          <FormUserVerify />;
        </Router>
      </div>
    );
    button = screen.getByRole("button");
    input = screen.getByTestId("code");
    error = screen.getByTestId("code-error");
    msg = screen.getByTestId("msg");
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
      data: {detail: successMsg},
    });

    userEvent.type(input, verification_code);
    userEvent.click(button);

    await waitFor(() => {
      expect(msg).toHaveTextContent(successMsg);
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
    userEvent.click(button);

    await waitFor(() => {
      expect(mockAxios.put).toHaveBeenCalledTimes(1);
      expect(mockAxios.put).toHaveBeenCalledWith(url, {
        verification_code,
      });
      expect(msg).toHaveTextContent(notSuccessMsg);
    });
  });

  it("El codigo es invalido", async () => {
    mockAxios.put.mockRejectedValue({
      response: {data: {detail: notSuccessMsg2}},
    });
    userEvent.type(input, verification_code);
    userEvent.click(button);

    await waitFor(() => {
      expect(msg).toHaveTextContent(notSuccessMsg2);
      expect(mockAxios.put).toHaveBeenCalledTimes(1);
      expect(mockAxios.put).toHaveBeenCalledWith(url, {
        verification_code,
      });
    });
  });
});
