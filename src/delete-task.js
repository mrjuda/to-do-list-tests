// delete-task.js

removeBook = (taskListArr, index) => {
    let id = index - 1;
    console.log(index);
    let removed = taskListArr.splice(id, 1) + ' removed';
    // return taskListArr.splice(id, 1);
    return removed;
  }
  
  module.exports = removeBook;
  