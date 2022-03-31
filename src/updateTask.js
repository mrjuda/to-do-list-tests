// updateTask.test.js

const updateTask = (taskArr, id) => {
  if (taskArr[id].done === true) {
    taskArr[id].done = false;
    return taskArr[id].done;
  }
  taskArr[id].done = true;
  return taskArr[id].done;
};

module.exports = updateTask;
