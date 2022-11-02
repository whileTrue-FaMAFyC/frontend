export default {
  put: jest.fn(() => Promise.resolve({data: {}})),
  get: jest.fn(() => Promise.resolve({data: []})),
  post: jest.fn(() => Promise.resolve({data: []})),
};
