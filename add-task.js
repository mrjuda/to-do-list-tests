// add-task.js

class Task {
  title;

  completed;

  index;
}

newTask = (title) => {
  // this.bookshelf = new StrShelf();
  const task = new Task();
  task.title = title;
  task.completed = false;
  // this.shelf.push(task);
  // this.updateShelf();
  // this.paintToPage();
  // this.setInputFieldListeners();
  // this.setCheckboxFieldListeners();

  if(title.length < 1) {
    return 'empty';
  } else {
    return title.length;
  }
}

module.exports = newTask;