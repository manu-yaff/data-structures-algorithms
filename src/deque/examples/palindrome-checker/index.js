const Deque = require('../../implementation/index');

function palindromeChecker(string) {
  const deque = new Deque();

  for (const char of string) {
    deque.addRear(char);
  }

  while (deque.size() > 1) {
    const front = deque.removeFront();
    const rear = deque.removeRear();

    if (front !== rear) {
      return false;
    }
  }

  return true;
}

module.exports = palindromeChecker;
