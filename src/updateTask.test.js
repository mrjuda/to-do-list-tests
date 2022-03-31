// updateTask.js

const updateTask = require('./updateTask.js');

test('update item from the list', () => {
    const taskArr = [
      { id: 1, description: 'task-1', done: false },
      { id: 2, description: 'task-2', done: false },
      { id: 3, description: 'task-3', done: false },
      { id: 4, description: 'task-4', done: false },
    ];
    expect(updateTask(taskArr, 0)).toBe(true);
  });

test('update item from the list', () => {
  const taskArr = [
    { id: 1, description: 'task-1', done: false },
    { id: 2, description: 'task-2', done: false },
    { id: 3, description: 'task-3', done: false },
    { id: 4, description: 'task-4', done: false },
  ];
  expect(updateTask(taskArr, 1)).toBe(true);
});

test('update item from the list', () => {
    const taskArr = [
      { id: 1, description: 'task-1', done: false },
      { id: 2, description: 'task-2', done: false },
      { id: 3, description: 'task-3', done: false },
      { id: 4, description: 'task-4', done: false },
    ];
    expect(updateTask(taskArr, 2)).toBe(true);
  });

  test('update item from the list', () => {
    const taskArr = [
      { id: 1, description: 'task-1', done: false },
      { id: 2, description: 'task-2', done: false },
      { id: 3, description: 'task-3', done: false },
      { id: 4, description: 'task-4', done: false },
    ];
    expect(updateTask(taskArr, 3)).toBe(true);
  });
