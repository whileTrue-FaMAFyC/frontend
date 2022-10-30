export const matchReducer = (state, action) => {
  const {type, payload} = action;

  const dict = {
    new_player: {
      ...state,
      players: [...state.players, payload.player],
    },
  };

  return dict[type] || state;
};
