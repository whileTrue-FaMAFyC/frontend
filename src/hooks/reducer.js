export const matchReducer = (state, action) => {
  const {type, payload} = action;

  const dict = {
    initial_info: {
      ...payload,
    },
    new_player: {
      ...state,
      players: [...state.players, payload.players],
    },
  };

  return dict[type] || state;
};
