// delete-task.test.js

const removeBook = require('./delete-task.js');

const test1 = 1;
const test2 = 2;
const test3 = 3;
const test4 = 4;

test('remove 1st task from the list', () => {
  const taskList = ['First task', 'Second task', 'Third task', 'Fourth task'];
  expect(removeBook(taskList, test1)).toBe('First task removed');
});

test('remove 2nd task from the list', () => {
  const taskList = ['First task', 'Second task', 'Third task', 'Fourth task'];
  expect(removeBook(taskList, test2)).toBe('Second task removed');
});

test('remove 3rd task from the list', () => {
  const taskList = ['First task', 'Second task', 'Third task', 'Fourth task'];
  expect(removeBook(taskList, test3)).toBe('Third task removed');
});

test('remove 4th task from the list', () => {
  const taskList = ['First task', 'Second task', 'Third task', 'Fourth task'];
  expect(removeBook(taskList, test4)).toBe('Fourth task removed');
});
