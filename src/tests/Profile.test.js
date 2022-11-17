import mockAxios from "axios";
import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Profile} from "../components";
import {userInfo} from "../__mocks__/userInfo";
import {BrowserRouter as Router, Link} from "react-router-dom";

describe("Profile tests", () => {
  //   beforeEach(async () => {
  //     mockAxios.get.mockResolvedValue({data: robotsMock});
  //     render(<FormPartidaConfig />);

  //     await waitFor(() => {
  //       robotsMock.forEach(({name}) => {
  //         expect(screen.getByText(name)).toBeInTheDocument();
  //       });
  //     });
  //   });

  let inputAvatarImage;
  let username;
  let email;
  let inputCurrentPassword;
  let inputNewPassword;
  let inputNewPasswordConfirmation;
  let applyButton;
  let undoButton;
  let submitButton;
  let cancelButton;
  let changePasswordButton;

  beforeEach(() => {
    render(
      <div>
        <Router>
          <Profile />;
        </Router>
      </div>
    );
    inputAvatarImage = screen.getByTestId("avatarImage");
    username = screen.getByTestId("username");
    email = screen.getByTestId("email");
    // inputCurrentPassword = screen.getByTestId("currentPassword");
    // inputNewPassword = screen.getByTestId("newPassword");
    // inputNewPasswordConfirmation = screen.getByTestId(
    //   "newPasswordConfirmation"
    // );
    // applyButton = screen.getByRole("apply");
    // undoButton = screen.getByRole("undo");
    // submitButton = screen.getByRole("submit");
    changePasswordButton = screen.getByRole("changePassword");
  });

  test("Los elementos de la pantalla inicial están renderizados", async () => {
    mockAxios.get.mockResolvedValue({data: userInfo});

    expect.toBeInTheDocument(inputAvatarImage);
    expect.toBeInTheDocument(username);
    expect.toBeInTheDocument(email);
    // expect.toBeInTheDocument(inputCurrentPassword);
    // expect.toBeInTheDocument(inputNewPassword);
    // expect.toBeInTheDocument(inputNewPasswordConfirmation);
    // expect.toBeInTheDocument(applyButton);
    // expect.toBeInTheDocument(undoButton);
    // expect.toBeInTheDocument(submitButton);
    expect.toBeInTheDocument(changePasswordButton);
  });

  test("Los elementos habiendo puesto avatar y tocando el botón de change password están renderizados", async () => {
    mockAxios.get.mockResolvedValue({data: userInfo});
    expect.toBeInTheDocument(inputAvatarImage);
    expect.toBeInTheDocument(username);
    expect.toBeInTheDocument(email);
    expect.toBeInTheDocument(changePasswordButton);
    userEvent.click(changePasswordButton);
    inputCurrentPassword = screen.getByTestId("currentPassword");
    inputNewPassword = screen.getByTestId("newPassword");
    inputNewPasswordConfirmation = screen.getByTestId(
      "newPasswordConfirmation"
    );
    expect.toBeInTheDocument(inputCurrentPassword);
    expect.toBeInTheDocument(inputNewPassword);
    expect.toBeInTheDocument(inputNewPasswordConfirmation);
    // expect(mockAxios.get).toHaveBeenCalledWith(
    //   `${process.env.REACT_APP_API_KEY}user-profile`,
    //   {
    //     headers: {
    //       Authorization: localStorage.getItem("user"),
    //     },
    //   }
    // );

    // expect(mockAxios.get).toHaveBeenCalledTimes(1);
    // expect(
    //   await waitFor(() => userInfo.forEach(({data})) screen.findByText("Adolfo"))
    // ).toBeInTheDocument();

    // await waitFor(() => {
    //   userInfo.forEach(({username, email}) => {
    //     expect(screen.getByText(username)).toBeInTheDocument();
    //   });
    // });
    // userEvent.type(inputCurrentPassword, "asdasdA1");
    const av = new File(["holis"], "aaavatar.png", {type: "image/png"});
    userEvent.upload(inputAvatarImage, av);
    applyButton = screen.getByRole("apply");
    undoButton = screen.getByRole("undo");
    submitButton = screen.getByRole("submit");
    expect.toBeInTheDocument(applyButton);
    expect.toBeInTheDocument(undoButton);
    expect.toBeInTheDocument(submitButton);
  });

  it("Aparece usuario y email", async () => {});

  it("Cambiar avatar", async () => {});

  it("Deshacer cambio de avatar", async () => {
    const av = new File(["holis"], "aaavatar.png", {type: "image/png"});
    userEvent.upload(inputAvatarImage, av);
    undoButton = screen.getByRole("undo");
    userEvent.click(undoButton);
  });

  it("Cambiar contraseña con exito", async () => {});

  it("Contraseña actual con pocos caracteres", async () => {
    userEvent.click(changePasswordButton);
    inputCurrentPassword = screen.getByTestId("currentPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputCurrentPassword, "sdasdA1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternCurrent");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Contraseña actual sin número", async () => {
    userEvent.click(changePasswordButton);
    inputCurrentPassword = screen.getByTestId("currentPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputCurrentPassword, "asdasdaA");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternCurrent");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Contraseña actual sin mayuscula", async () => {
    userEvent.click(changePasswordButton);
    inputCurrentPassword = screen.getByTestId("currentPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputCurrentPassword, "asdasda1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternCurrent");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Contraseña actual sin minuscula", async () => {
    userEvent.click(changePasswordButton);
    inputCurrentPassword = screen.getByTestId("currentPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputCurrentPassword, "ASDASDA1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternCurrent");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Nueva contraseña con pocos caracteres", async () => {
    userEvent.click(changePasswordButton);
    inputNewPassword = screen.getByTestId("newPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPassword, "sdasdA1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternNew");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Nueva contraseña sin número", async () => {
    userEvent.click(changePasswordButton);
    inputNewPassword = screen.getByTestId("newPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPassword, "asdasdaA");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternNew");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Nueva contraseña sin mayuscula", async () => {
    userEvent.click(changePasswordButton);
    inputNewPassword = screen.getByTestId("newPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPassword, "asdasda1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternNew");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Nueva contraseña sin minuscula", async () => {
    userEvent.click(changePasswordButton);
    inputNewPassword = screen.getByTestId("newPassword");
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPassword, "ASDASDA1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternNew");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Confirmación de nueva contraseña con pocos caracteres", async () => {
    userEvent.click(changePasswordButton);
    inputNewPasswordConfirmation = screen.getByTestId(
      "newPasswordConfirmation"
    );
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPasswordConfirmation, "sdasdA1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternConfirmation");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Confirmación de nueva contraseña sin número", async () => {
    userEvent.click(changePasswordButton);
    inputNewPasswordConfirmation = screen.getByTestId(
      "newPasswordConfirmation"
    );
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPasswordConfirmation, "aasdasdA");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternConfirmation");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Confirmación de nueva contraseña sin mayuscula", async () => {
    userEvent.click(changePasswordButton);
    inputNewPasswordConfirmation = screen.getByTestId(
      "newPasswordConfirmation"
    );
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPasswordConfirmation, "aasdasd1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternConfirmation");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Confirmación de nueva contraseña sin minuscula", async () => {
    userEvent.click(changePasswordButton);
    inputNewPasswordConfirmation = screen.getByTestId(
      "newPasswordConfirmation"
    );
    submitButton = screen.getByRole("submit");
    userEvent.type(inputNewPasswordConfirmation, "ASDASDA1");
    userEvent.click(submitButton);
    const alert = await screen.findByTestId("invalidPatternConfirmation");
    expect(alert).toHaveTextContent(
      "The password must contain at least 8 characters, one uppercase, lowercase and number"
    );
  });

  it("Contraseña actual distinta a la cargada en el sistema", async () => {});

  it("Confirmación de nueva contraseña distinta a la nueva contraseña", async () => {
    userEvent.click(changePasswordButton);
    inputCurrentPassword = screen.getByTestId("currentPassword");
    inputNewPassword = screen.getByTestId("newPassword");
    inputNewPasswordConfirmation = screen.getByTestId(
      "newPasswordConfirmation"
    );
    submitButton = screen.getByRole("submit");
    userEvent.type(inputCurrentPassword, "asdasdA1");
    userEvent.type(inputNewPassword, "asdasdB1");
    userEvent.type(inputNewPasswordConfirmation, "asdasdA1");
    userEvent.click(submitButton);
    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Passwords do not match");
  });

  it("Contraseña nueva igual a la puesta en el campo de contraseña actual", async () => {
    userEvent.click(changePasswordButton);
    inputCurrentPassword = screen.getByTestId("currentPassword");
    inputNewPassword = screen.getByTestId("newPassword");
    inputNewPasswordConfirmation = screen.getByTestId(
      "newPasswordConfirmation"
    );
    submitButton = screen.getByRole("submit");
    userEvent.type(inputCurrentPassword, "asdasdA1");
    userEvent.type(inputNewPassword, "asdasdA1");
    userEvent.type(inputNewPasswordConfirmation, "asdasdA1");
    userEvent.click(submitButton);
    const alert = await screen.findByRole("alertError");
    expect(alert).toHaveTextContent("Current and new password are the same");
  });

  it("Cancelar cambio de contraseña", async () => {
    userEvent.click(changePasswordButton);
    cancelButton = screen.getByRole("cancel");
    expect.toBeInTheDocument(cancelButton);
    userEvent.click(cancelButton);
    expect.toBeInTheDocument(screen.getByRole("changePassword"));
  });
});
