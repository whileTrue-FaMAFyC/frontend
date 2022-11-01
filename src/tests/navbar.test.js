// __tests__/login.js
// again, these first two imports are something you'd normally handle in
// your testing framework configuration rather than importing them in every file.
import "@testing-library/jest-dom";
import * as React from "react";
// import API mocking utilities from Mock Service Worker.
import {rest} from "msw";
import {setupServer} from "msw/node";
// import testing utilitiess
import {render, fireEvent, screen} from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import App from "../components/App";
import {BrowserRouter as Router, Link} from "react-router-dom";

// const server = setupServer(
//   rest.post(`${process.env.REACT_APP_API_KEY}", (req, res, ctx) => {
//     return res(ctx.json(fakeUserResponse));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => {
//   server.resetHandlers();
// });
// afterAll(() => server.close());

// Test for rendering Navbar
test("render navbar component successfully", async () => {
  render(
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );

  expect.toBeInTheDocument(screen.getByTestId("navbar"));
  expect.toBeInTheDocument(screen.getByTestId("toLogin"));
  expect.toBeInTheDocument(screen.getByTestId("toReg"));
  expect.toBeInTheDocument(screen.getByTestId("toHome"));
});

// Test for rendering movement between components
// test("move to home", async () => {
//   render(
//     <div>
//       <Router>
//         <App />
//       </Router>
//     </div>
//   );

//   expect.toBeInTheDocument(screen.getByTestId("navbar"));
//   expect.toBeInTheDocument(screen.getByTestId("toLogin"));
//   expect.toBeInTheDocument(screen.getByTestId("toReg"));

//   fireEvent.click(screen.getByTestId("toHome"));
//   expect.toBeInTheDocument(screen.getByText("PyRobots"));
// });

// test("move to login", async () => {
//   render(
//     <div>
//       <Router>
//         <App />
//       </Router>
//     </div>
//   );

//   expect.toBeInTheDocument(screen.getByTestId("navbar"));
//   expect.toBeInTheDocument(screen.getByTestId("toLogin"));
//   expect.toBeInTheDocument(screen.getByTestId("toReg"));

//   fireEvent.click(screen.getByTestId("toLogin"));
//   expect.toBeInTheDocument(await screen.findByTestId("loginButton"));
// });
