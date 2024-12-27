/**
 * Class representing a stack
 */
class Stack {
  #list;

  constructor() {
    this.#list = [];
  }

  /**
   * Checks if stack is empty
   * @returns {boolean} true if stack is empty, otherwise false
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Adds item to the stack
   * @param {any} item
   */
  push(item) {
    this.#list.push(item);
  }

  /**
   * Removes item from the stack
   * @returns {any} item removed from the stack
   */
  pop() {
    return this.#list.pop();
  }

  /**
   * Retrieves peek of the stack
   * @returns {(any | undefined)} returns peek of stack or undefined if stack's empty
   */
  peek() {
    if (this.size() > 0) {
      const peekIndex = this.size() - 1;

      return this.#list[peekIndex];
    }
  }

  /**
   * Retrieves size of the stack
   * @returns {number} number of elements in the stack
   */
  size() {
    return this.#list.length;
  }
}

module.exports = Stack;
