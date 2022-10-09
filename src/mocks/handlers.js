import {rest} from "msw";

export const handlers = [
  rest.post("//localhost:3000", (req, res, ctx) => {
    return res(ctx.json({success: true}));
  }),
];
