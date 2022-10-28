const movieCount = require('../movieCount.js');

const object = [
  {
    user: 'Peter',
  },
  {
    user: 'Abel',
  },
  {
    user: 'Abayomi',
  },
];
// The lenght of the array should be equal to 3
test('test the length of an array', () => {
  expect(movieCount(object)).toBe(3);
});