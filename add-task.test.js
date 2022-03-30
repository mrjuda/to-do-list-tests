// add-task.test.js

const newTask = require('./add-task.js');

const test1 = '';
const test2 = '7 chars';
const test3 = 'I have 16 chars';

// test 1: less than 1 char
test('String size is < 1', () => {
  expect(strSize(test1)).toBe('<1 char');
});

// test 2: 7 chars
test('String length is equal to 7', () => {
  expect(strSize(test2)).toBe(7);
});

// test 3: more than 10 chars
test('String length is > 10', () => {
  expect(strSize(test3)).toBe('>10 chars');
});

console.log(strSize(test3));