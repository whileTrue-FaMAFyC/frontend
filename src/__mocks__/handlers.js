import {rest} from "msw";

export const handlers = [
  rest.post("http://localhost:8000/bot-create", (req, res, ctx) => {
    return res(ctx.json({status: 200, success: true}));
  }),
];
