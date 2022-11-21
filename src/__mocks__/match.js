export const joinLobby = {
  creator_username: "isra",
  has_password: false,
  im_in: true,
  is_creator: true,
  max_players: 2,
  min_players: 2,
  name: "Match pro",
  num_games: 200,
  num_rounds: 10000,
  requester_username: "isra2",
  results: [],
  started: false,
  user_robot: [
    {
      username: "isra",
      user_avatar: "",
      robot_name: "Shooter",
      robot_avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…E\nREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z",
    },
  ],
  users_joined: 1,
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
  started: true,
  im_in: true,
  is_creator: true,
};

export const results = {
  action: "results",
  data: {
    winners: [
      {
        username: "Jorgito",
        robot_name: "RobotName",
      },
    ],
  },
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

export const joinLobby4 = {
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
  is_creator: false,
};

export const join = {
  action: "join",
  data: {
    username: "isra2",
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

export const start = {
  action: "start",
  data: "",
};

export const joinEndpoint = {
  creator_username: "isra",
  has_password: false,
  im_in: false,
  is_creator: false,
  max_players: 2,
  min_players: 2,
  name: "Match pro",
  num_games: 200,
  num_rounds: 10000,
  requester_username: "isra2",
  results: [],
  started: false,
  user_robot: [
    {
      username: "isra",
      user_avatar: "",
      robot_name: "Shooter",
      robot_avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…E\nREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf//Z",
    },
  ],
  users_joined: 1,
};
