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
  };

  if (type === "leave") {
    return dict.leave() || state;
  }

  return dict[type] || state;
};
