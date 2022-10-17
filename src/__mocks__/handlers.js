import {rest} from "msw";

const fakeUserResponse = {Authorization: "fake_user_token"};

export const handlers = [
  rest.post("http://localhost:8000/bot-create", (req, res, ctx) => {
    return res(ctx.json({status: 200, success: true}));
  }),
  rest.post("http://localhost:8000/login", (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  }),
];
