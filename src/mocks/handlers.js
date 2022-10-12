// src/mocks/handlers.js
import {rest} from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post(`${process.env.REACT_APP_REG_KEY}partida`, (req, res, ctx) => {
    return res(ctx.json({success: true}));
  }),
];
