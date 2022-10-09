import {rest} from "msw";

export const handlers = [
  rest.post("/", (req, res, ctx) => {
    return res(ctx.json({success: true}));
  }),
];
