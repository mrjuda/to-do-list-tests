// add-task.test.js

const newTask = require('./add-task.js');

const test1 = '';
const test2 = 'My task has 20 chars';

// test 1: empty
test('String size is empty', () => {
  expect(newTask(test1)).toBe('empty');
});

// test 2: 20 chars
test('String length is equal to 7', () => {
  expect(newTask(test2)).toBe(20);
});
