// clear-all.test.js

const clearAll = require('./clear-all.js');

test('Clear checked tasks', () => {
  const taskArr = [
    { id: 1, description: 'task-1', done: true },
    { id: 2, description: 'task-2', done: false },
    { id: 3, description: 'task-3', done: true },
    { id: 4, description: 'task-4', done: false },
  ];
  expect(clearAll(taskArr)).toContain('removed');
});

test('Clear checked tasks', () => {
  const taskArr = [
    { id: 1, description: 'task-1', done: false },
    { id: 2, description: 'task-2', done: true },
    { id: 3, description: 'task-3', done: false },
    { id: 4, description: 'task-4', done: true },
  ];
  expect(clearAll(taskArr)).toContain('removed');
});

test('Clear checked tasks', () => {
  const taskArr = [
    { id: 1, description: 'task-1', done: false },
    { id: 2, description: 'task-2', done: false },
    { id: 3, description: 'task-3', done: false },
    { id: 4, description: 'task-4', done: false },
  ];
  expect(clearAll(taskArr)).toContain('No tasks completed');
});
