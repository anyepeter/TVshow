const comentCount = require('../commentCount.js');

const object = [
  {
    user:'Peter'
  },
  {
    user:'Abel'
  },
  {
    user:'Abayomi'
  }
]
// The lenght of the array should be equal to 3 
test('test the length of an array', () => {
  expect(comentCount(object)).toBe(3)
})