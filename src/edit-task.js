// edit-task.js

const editTask = (taskArr, newDesc, id) => {
  const msg = ' was replaced by ';
  const finalMsg = taskArr[id] + msg + newDesc;
  taskArr.splice(id, 1, newDesc);
  return finalMsg;
};

module.exports = editTask;
