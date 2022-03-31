// edit-task.test.js

const editTask = require('./edit-task.js');

// test 1: Task-1 >> Task-A
test('Task-1 is replaced by Task-A', () => {
  const taskList = ['Task-1', 'Task-2', 'Task-3', 'Task-4'];
  const newDescription = 'Task-A';
  const index = 0;
  expect(editTask(taskList, newDescription, index)).toBe('Task-1 was replaced by Task-A');
});

// Test 2: Task-2 >> Task-B
test('Task-2 is replaced by Task-B', () => {
  const taskList = ['Task-1', 'Task-2', 'Task-3', 'Task-4'];
  const newDescription = 'Task-B';
  const index = 1;
  expect(editTask(taskList, newDescription, index)).toBe('Task-2 was replaced by Task-B');
});

// Test 3: Task-3 >> Task-C
test('Task-3 is replaced by Task-C', () => {
  const taskList = ['Task-1', 'Task-2', 'Task-3', 'Task-4'];
  const newDescription = 'Task-C';
  const index = 2;
  expect(editTask(taskList, newDescription, index)).toBe('Task-3 was replaced by Task-C');
});
