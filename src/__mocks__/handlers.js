// src/mocks/handlers.js
import {rest} from "msw";

export const fakeUserResponse = {Authorization: "fake_user_token"};
const username = "ElMasGrande";

export const handlers = [
  rest.post("http://localhost:8000/create-bot", (req, res, ctx) => {
    return res(ctx.json({status: 200, success: true}));
  }),
  rest.post("http://localhost:8000/login", (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  }),
  rest.post("http://localhost:8000/signup", async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({status: 201}));
  }),
  rest.post(
    "http://localhost:8000/matches/new-match",
    async (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({status: 201}));
    }
  ),
  rest.post(
    `http://localhost:8000/load-avatar/${localStorage.getItem("username")}`,
    (req, res, ctx) => {
      return res(ctx.json({status: 200, success: true}));
    }
  ),
];
