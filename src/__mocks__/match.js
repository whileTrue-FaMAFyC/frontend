export const joinLobby = {
  name: "partida",
  creator_username: "israel",
  min_players: 2,
  max_players: 4,
  num_games: 100,
  users_joined: 1,
  user_robot: [
    {
      username: "israel",
      user_avatar: "avatarUser",
      robot_avatar: "avatarRobot",
      robot_name: "RobotName",
    },
  ],
  results: [],
  started: false,
  im_in: true,
  is_creator: true,
};

export const joinLobby2 = {
  name: "partida",
  creator_username: "israel",
  min_players: 2,
  max_players: 4,
  num_games: 100,
  users_joined: 1,
  user_robot: [
    {
      username: "israel",
      user_avatar: "avatarUser",
      robot_avatar: "avatarRobot",
      robot_name: "RobotName",
    },
    {
      username: "Jorgito",
      user_avatar: "Avatar2",
      robot_avatar: "RobotAvatar2",
      robot_name: "RobotName2",
    },
  ],
  results: [],
  started: false,
  im_in: true,
  is_creator: true,
};

export const joinLobby3 = {
  name: "partida",
  creator_username: "israel",
  min_players: 2,
  max_players: 4,
  num_games: 100,
  users_joined: 2,
  user_robot: [
    {
      username: "israel",
      user_avatar: "avatarUser",
      robot_avatar: "avatarRobot",
      robot_name: "RobotName",
    },
    {
      username: "Jorgito",
      user_avatar: "Avatar2",
      robot_avatar: "RobotAvatar2",
      robot_name: "RobotName2",
    },
  ],
  results: [],
  started: false,
  im_in: true,
  is_creator: true,
};

export const join = {
  action: "join",
  data: {
    username: "Jorgito",
    user_avatar: "Avatar2",
    robot_avatar: "RobotAvatar2",
    robot_name: "RobotName2",
  },
};

export const leave = {
  action: "leave",
  data: {
    username: "Jorgito",
    user_avatar: "Avatar2",
    robot_avatar: "RobotAvatar2",
    robot_name: "RobotName2",
  },
};

export const results = {
  action: "results",
  data: {
    winners: [
      {
        username: "israel",
        robot_name: "RobotName",
      },
    ],
  },
};

export const start = {
  action: "start",
  data: "",
};
