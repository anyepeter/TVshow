const interest = require('../reservation_counter.js');

const viewers = [
  {
    username: 'Oluwatoyin',
    date_start: '2022-09-8',
    date_end: '2022-10-11',
  },
  {
    username: 'Abel',
    date_start: '2022-09-8',
    date_end: '2022-10-11',
  },
  {
    username: 'Peter',
    date_start: '2022-09-8',
    date_end: '2022-10-11',
  },
];

const users = []

// the lenght of the array should be zero 
test('test the number of reservations made should be zero', () => {
  expect(interest(users)).toBe(0);
});


test('test the number of reservations made', () => {
  expect(interest(viewers)).toBe(3);
});

// Expected the array length to equal 3
