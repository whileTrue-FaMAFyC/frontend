// src/mocks/handlers.js
import {rest} from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("/", (req, res, ctx) => {
    return res(ctx.json({success: true}));
  }),
];
