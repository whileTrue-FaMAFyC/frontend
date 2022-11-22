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
      im_in:
        state.user_robot.some(
          (user) => user.username === state.requester_username
        ) || state.requester_username === payload.username,
    };
  }

  if (type === "leave") {
    let users = [...state.user_robot];
    users = users.filter((user) => user.username !== payload.username);
    return {
      ...state,
      users_joined: state.users_joined - 1,
      user_robot: users,
      im_in: users.some((user) => user.username === state.requester_username),
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
