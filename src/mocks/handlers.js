// src/mocks/handlers.js
import {rest} from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("http://localhost:8000/signup", (req, res, ctx) => {
    return res(ctx.json({success: true}));
  }),
];
