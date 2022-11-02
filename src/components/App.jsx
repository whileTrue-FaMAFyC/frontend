import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import {
  Login,
  Register,
  Navbar,
  Botsubmit,
  GameConfig,
  Simulation,
  AvatarSubmit,
} from "../components";
import Verify from "../pages/Verify/Verify";
import ListMatches from "../pages/ListMatches/ListMatches";

const props = {
  names: ["Wallee", "Eva", "Rocoloco", "Mario"],
  // colors: ["red", "yellow", "turquoise", "pink"],
  simulation: [
    {
      robots: {
        Wallee: {
          x: 0,
          y: 0,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
      missiles: {
        1: {
          initial_x: 2,
          initial_y: 5,
          x: 0,
          y: 0,
          exploded: false,
          new: true,
        },
        2: {
          initial_x: 6,
          initial_y: 10,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        3: {
          initial_x: 12,
          initial_y: 50,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        4: {
          initial_x: 21,
          initial_y: 52,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: 0,
          y: 100,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
      missiles: {
        1: {
          initial_x: 2,
          initial_y: 5,
          x: 100,
          y: 0,
          exploded: false,
          new: false,
        },
        2: {
          initial_x: 6,
          initial_y: 10,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        3: {
          initial_x: 12,
          initial_y: 50,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        4: {
          initial_x: 21,
          initial_y: 52,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: 60,
          y: 60,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: 100,
          y: 100,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
      missiles: {
        1: {
          initial_x: 2,
          initial_y: 5,
          x: 100,
          y: 100,
          exploded: false,
          new: false,
        },
        2: {
          initial_x: 6,
          initial_y: 10,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        3: {
          initial_x: 12,
          initial_y: 50,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        4: {
          initial_x: 21,
          initial_y: 52,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
      },
    },
    {
      robots: {
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Wallee: {
          x: 100,
          y: 0,
          harmed: false,
          died: false,
        },
      },
      missiles: {
        1: {
          initial_x: 2,
          initial_y: 5,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        2: {
          initial_x: 6,
          initial_y: 10,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        3: {
          initial_x: 12,
          initial_y: 50,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        4: {
          initial_x: 21,
          initial_y: 52,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: 0,
          y: 0,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
      missiles: {
        1: {
          initial_x: 2,
          initial_y: 5,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        2: {
          initial_x: 6,
          initial_y: 10,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        3: {
          initial_x: 12,
          initial_y: 50,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        4: {
          initial_x: 21,
          initial_y: 52,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
      },
    },
    {
      robots: {
        Wallee: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Mario: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Rocoloco: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
      },
      missiles: {
        1: {
          initial_x: 2,
          initial_y: 5,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        2: {
          initial_x: 6,
          initial_y: 10,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        3: {
          initial_x: 12,
          initial_y: 50,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
        4: {
          initial_x: 21,
          initial_y: 52,
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: false,
        },
      },
    },
  ],
};

//   simulation: [
//     {
//       robots: [
//         {
//           x: 0,
//           y: 0,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: 0,
//           y: 100,
//           harmed: false,
//           died: false,
//         },
//       ],

//       rockets: [
//         {
//           x: 0,
//           y: 0,
//           exploded: false,
//           new: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: true,
//         },
//         {
//           x: 0,
//           y: 100,
//           exploded: false,
//           new: true,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: 40,
//           y: 40,
//           harmed: true,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//       ],
//       rockets: [
//         {
//           x: 40,
//           y: 40,
//           exploded: false,
//           new: false,
//         },
//         {
// x: Math.floor(Math.random() * 100) + 1,
// y: Math.floor(Math.random() * 100) + 1,
// exploded: false,
// new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: 20,
//           y: 30,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//       ],
//       rockets: [
//         {
//           x: 20,
//           y: 30,
//           exploded: true,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: true,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: 80,
//           y: 80,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: 80,
//           y: 80,
//           exploded: false,
//           new: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: true,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: true,
//           new: false,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: true,
//         },
//       ],
//     },
//     {
//       robots: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           harmed: false,
//           died: true,
//         },
//       ],
//       rockets: [
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//         {
//           x: Math.floor(Math.random() * 100) + 1,
//           y: Math.floor(Math.random() * 100) + 1,
//           exploded: false,
//           new: false,
//         },
//       ],
//     },
//   ],
// };

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/listgames' element={<ListMatches />} />
          <Route path='/botsubmit' element={<Botsubmit />} />
          <Route path='/gameconfig' element={<GameConfig />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/simulation' element={<Simulation props={props} />} />
          <Route path='/avatarSubmit' element={<AvatarSubmit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
