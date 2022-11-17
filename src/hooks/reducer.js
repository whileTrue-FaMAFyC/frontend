export const matchReducer = (state, action) => {
  const {type, payload} = action;

  if (type === "initial_info") {
    return {
      ...payload,
    };
  }

  if (type === "join") {
    return {
      ...state,
      users_joined: state.users_joined + 1,
      user_robot: [...state.user_robot, payload],
      im_in: true,
    };
  }

  if (type === "leave") {
    let users = [...state.user_robot];
    users = users.filter((user) => user.username !== payload.username);
    return {
      ...state,
      users_joined: state.users_joined - 1,
      user_robot: users,
      im_in: false,
    };
  }

  if (type === "results") {
    return {
      ...state,
      results: payload?.winners,
    };
  }

  if (type === "start") {
    return {
      ...state,
      started: true,
    };
  }

  return state;
};
