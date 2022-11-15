export const props = {
  names: [
    {name: "Wallee", id: "Wallee"},
    {name: "Eva", id: "Eva"},
    {name: "Mario", id: "Mario"},
    {name: "Rocoloco", id: "Rocoloco"},
  ],

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
        0: {
          x: 0,
          y: 0,
          exploded: false,
          new: true,
        },
        1: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        2: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        3: {
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
        0: {
          x: 0,
          y: 0,
          exploded: false,
          new: true,
        },
        1: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        2: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        3: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
      },
    },
    {
      robots: {
        Eva: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          harmed: false,
          died: false,
        },
        Wallee: {
          x: 100,
          y: 100,
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
        0: {
          x: 0,
          y: 0,
          exploded: false,
          new: true,
        },
        1: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        2: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        3: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
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
        0: {
          x: 0,
          y: 0,
          exploded: false,
          new: true,
        },
        1: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        2: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        3: {
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
        0: {
          x: 0,
          y: 0,
          exploded: false,
          new: true,
        },
        1: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        2: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
        3: {
          x: Math.floor(Math.random() * 100) + 1,
          y: Math.floor(Math.random() * 100) + 1,
          exploded: false,
          new: true,
        },
      },
    },
  ],
};
