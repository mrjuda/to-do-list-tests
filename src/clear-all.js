// clear-all.js

const clearAll = (taskArr) => {
  const removedTasks = [];
  let finalMsg = '';
  for (let i = 0; i < taskArr.length; i += 1) {
    if (taskArr[i].done === true) {
      removedTasks.push(taskArr[i].description);
      taskArr.splice(i, 1);
    }
  }
  for (let i = 0; i < removedTasks.length; i += 1) {
    finalMsg += ' ';
    finalMsg += removedTasks[i];
  }

  if (finalMsg === '') {
    return 'No tasks completed';
  }

  finalMsg += ' were removed';
  return finalMsg;
};

module.exports = clearAll;
