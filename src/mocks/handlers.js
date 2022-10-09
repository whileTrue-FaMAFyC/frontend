import {rest} from "msw";

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_KEY}games`, (req, res, ctx) => {
    return res(
      ctx.json([
        {id: 1, name: "game10", players: "1"},
        {id: 2, name: "game11", players: "2"},
      ])
    );
  }),
];
