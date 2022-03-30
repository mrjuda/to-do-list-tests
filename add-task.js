// add-task.js

function strLength(str) {
  return str.length;
}

function strSize(mockStr) {
  const mockStrSize = strLength(mockStr);

  if (mockStrSize < 1) {
    return '<1 char';
  } else if (mockStrSize > 10) {
    return '>10 chars';
  } else {
    return mockStrSize;
  }
}

module.exports = strSize;