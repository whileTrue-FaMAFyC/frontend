// src/mocks/handlers.js
import {rest} from "msw";
import {results} from "./match";

export const fakeUserResponse = {authorization: "fake_user_token"};
const username = "ElMasGrande";

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_KEY}create-bot`, (req, res, ctx) => {
    return res(ctx.json({status: 200, success: true}));
  }),
  rest.post(`${process.env.REACT_APP_API_KEY}login`, (req, res, ctx) => {
    return res(ctx.json(fakeUserResponse));
  }),
  rest.post(`${process.env.REACT_APP_API_KEY}signup`, async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({status: 201}));
  }),
  rest.post(
    `${process.env.REACT_APP_API_KEY}matches/new-match`,
    async (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({status: 201, name: "Soyunrobot"}));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_KEY}load-avatar/${localStorage.getItem(
      "username"
    )}`,
    (req, res, ctx) => {
      return res(ctx.json({status: 200, success: true}));
    }
  ),

  rest.put(
    `${process.env.REACT_APP_API_KEY}matches/start-match/:match_id`,
    (req, res, ctx) => {
      return res(ctx.json(results));
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_KEY}new-simulation`,
    (req, res, ctx) => {
      return res(ctx.json({status: 200, success: true}));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_KEY}password-restore-request`,
    (req, res, ctx) => {
      return res(ctx.json({status: 200, success: true}));
    }
  ),
  rest.put(
    `${process.env.REACT_APP_API_KEY}password-restore`,
    (req, res, ctx) => {
      return res(ctx.json({status: 200, success: true}));
    }
  ),
];
