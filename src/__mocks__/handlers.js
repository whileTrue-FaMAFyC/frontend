// src/mocks/handlers.js
import {rest} from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post(
    "https://634303a43f83935a784e2a0c.mockapi.io/partida",
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({status: 201}));
    }
  ),
];
