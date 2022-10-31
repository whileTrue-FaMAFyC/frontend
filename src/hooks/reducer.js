export const matchReducer = (state, action) => {
  const {type, payload} = action;

  const dict = {
    initial_info: {
      ...payload,
    },
  };

  return dict[type] || state;
};
