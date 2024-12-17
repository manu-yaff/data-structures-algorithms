const Queue = require('../implementation/index');

/**
 * Implement Stack using Queues
 * 
 * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

 * Implement the MyStack class:

 * void push(int x) Pushes element x to the top of the stack.
 * int pop() Removes the element on the top of the stack and returns it.
 * int top() Returns the element on the top of the stack.
 * boolean empty() Returns true if the stack is empty, false otherwise.

 */
class StackWithQueues {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  /**
   * adds element to the stack
   */
  push(val) {
    this.q1.enqueue(val);
  }

  /**
   * removes element from stack, if stack is empty, returns false
   */
  pop() {
    if (this.q1.peek() === null) {
      return false;
    }

    let current = this.q1.head;

    while (current.next !== null) {
      this.q2.enqueue(this.q1.dequeue());

      current = current.next;
    }

    let temp = this.q1;

    this.q1 = this.q2;
    this.q2 = temp;

    return this.q2.dequeue();
  }

  /**
   * returns top of the stack, if stack is empty, returns false
   */
  top() {
    if (this.q1.peek() !== null) {
      let current = this.q1.head;

      while (current.next !== null) {
        current = current.next;
      }

      return current.val;
    }

    return false;
  }

  /**
   * returns whether stack is empty or not
   */
  empty() {
    return this.q1.peek() === null;
  }
}

module.exports = StackWithQueues;
