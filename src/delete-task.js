// delete-task.js

const removeBook = (taskListArr, index) => {
  const id = index - 1;
  const removed = ' removed';
  return taskListArr.splice(id, 1) + removed;
};

module.exports = removeBook;
