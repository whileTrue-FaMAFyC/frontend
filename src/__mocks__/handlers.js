// src/mocks/handlers.js
import {rest} from "msw";

// export const handlers = [
// Handles a POST /login request
export const todoOk_201 = rest.post(
  "http://localhost:8000/signup",
  async (req, res, ctx) => {
    return res(ctx.json({status: 200}));
  }
);

export const todoMal_400 = rest.post(
  "http://localhost:8000/signup",
  async (req, res, ctx) => {
    return res(ctx.status(401), ctx.json({detail: "Server error"}));
  }
);
// ];

export const handlers = [todoOk_201, todoMal_400];
