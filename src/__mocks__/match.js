export const responseNewMatch = {
  action: "new_lobby",
  host: {name: "host", robot: "RobotHost"},
};

export const responseJoinLobby = {
  action: "joined_lobby",
  players: [
    {name: "host", robot: "RobotHost"},
    {name: "fedor", robot: "RobotFedor"},
  ],
};

export const responseNewPlayer = {
  action: "new_player",
  player: {name: "El pepe", robot: "RobotPepe"},
};
