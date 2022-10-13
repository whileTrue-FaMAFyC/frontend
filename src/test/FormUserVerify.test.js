import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {FormUserVerify} from "../components";

describe("Componente de verificacion de codigo", () => {
  let button;
  let input;
  let error;

  beforeEach(() => {
    render(<FormUserVerify />);
    button = screen.getByRole("button");
    input = screen.getByTestId("code");
    error = screen.getByTestId("error");
  });

  it("Deberia aparecer un error al escribir mas de 4 caracteres", async () => {
    userEvent.type(input, "Holaaaa");
    await waitFor(() => {
      expect(error).toHaveTextContent("La cantidad maxima de caracteres es 4");
    });
  });

  it("No Deberia aparecer un error al escribir menos de 5 caracteres", async () => {
    userEvent.type(input, "Hola");
    await waitFor(() => {
      expect(error).toHaveTextContent("");
    });
  });
});
