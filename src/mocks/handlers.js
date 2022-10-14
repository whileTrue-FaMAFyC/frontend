import {rest} from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_KEY}`, (req, res, ctx) => {
    return res(ctx.json({success: true}));
  }),
];
