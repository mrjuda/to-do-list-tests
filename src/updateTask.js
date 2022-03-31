
const updateTask = (taskArr, id) => {  
  if (taskArr[id].done === true) {
    taskArr[id].done = false;
    return taskArr[id].done;
  } else {
    taskArr[id].done = true;
    return taskArr[id].done;
  }
};

modules.export = updateTask;