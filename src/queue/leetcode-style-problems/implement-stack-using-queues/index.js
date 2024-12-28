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

// Time complexity
// pop takes O(n) because we transfer elements from q1 to q2

// Space complexity O(n), for the 2 queues
var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function push(x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function pop() {
  if (this.q1.length > 0) {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    const temp = this.q1;

    this.q1 = this.q2;
    this.q2 = temp;

    return this.q2.shift();
  }
};

/**
 * @return {number}
 */
MyStack.prototype.top = function top() {
  if (this.q1.length > 0) {
    return this.q1[this.q1.length - 1];
  }
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function empty() {
  return this.q1.length === 0;
};

module.exports = MyStack;
