import {rest} from "msw";
import {gamesMock} from "./games";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_KEY}games`, (req, res, ctx) => {
    return res(ctx.json(gamesMock));
  }),
];
