// add-task.js

class Task {
  title;

  completed;

  index;
}

newTask = (title) => {
  this.bookshelf = new StrShelf();
  const task = new Task();
  task.title = title;
  task.completed = false;
  this.shelf.push(task);
  this.updateShelf();
  this.paintToPage();
  this.setInputFieldListeners();
  this.setCheckboxFieldListeners();
}

module.exports = newTask;