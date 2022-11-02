export const matchReducer = (state, action) => {
  const {type, payload} = action;

  const dict = {
    initial_info: {
      ...payload,
    },
    join: {
      ...state,
      users_joined: state.users_joined + 1,
      user_robot: [...state.user_robot, payload],
      im_in: true,
    },
    leave: () => {
      let users = [...state.user_robot];
      users = users.filter((user) => user.username !== payload.username);
      return {
        ...state,
        users_joined: state.users_joined - 1,
        user_robot: users,
      };
    },
    results: {
      ...state,
      results: payload?.winners,
    },
    start: {
      ...state,
      started: true,
    },
  };

  if (type === "leave") {
    return dict.leave() || state;
  }

  return dict[type] || state;
};
