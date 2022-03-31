// add-task.js

class Task {
  title;

  completed;

  index;
}

const newTask = (title) => {
  const task = new Task();
  task.title = title;
  task.completed = false;
  if (title.length < 1) {
    return 'empty';
  }
  return title.length;
};

module.exports = newTask;
