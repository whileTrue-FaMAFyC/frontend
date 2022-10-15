import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {FormUserVerify} from "../components";
import mockAxios from "axios";

describe("Componente de verificacion de codigo", () => {
  let button;
  let input;
  let error;

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
});
