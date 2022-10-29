const comentCount = require('../commentCount.js');

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

const objectTwo = [];
// The lenght of the array should be equal to 3
test('test the length of an array', () => {
  expect(comentCount(object)).toBe(3);
});

// The lenght of the array should be 0
test('test the length of an array', () => {
  expect(comentCount(objectTwo)).toBe(0);
});
