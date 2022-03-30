// delete-task.js

const shelf = ['First task', 'Second task', 'Third task'];
console.log(shelf[0]);

removeBook = (id) => {
  id -= 1;
  console.log('shelf before: ' + shelf + '\n');
  shelf.splice(id, 1);
  return '\nshelf after: ' + shelf;
}

console.log(removeBook(3));

module.exports = removeBook;
