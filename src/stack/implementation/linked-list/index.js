class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Class representing a stack
 */
class Stack {
  #size;
  #head;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  /**
   * Checks if stack is empty
   * @returns {boolean} true if stack is empty, otherwise false
   */
  isEmpty() {
    return this.#head === null;
  }

  /**
   * Adds item to the stack
   * @param {any} item
   */
  push(item) {
    const newNode = new Node(item);

    newNode.next = this.#head;

    this.#head = newNode;

    this.#size += 1;
  }

  /**
   * Removes item from the stack
   * @returns {any | null} item removed from the stack
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      const poppedItem = this.#head;

      this.#head = this.#head.next;
      this.#size -= 1;

      return poppedItem.value;
    }
  }

  /**
   * Retrieves peek of the stack
   * @returns {(any | null)} returns peek of stack or undefined if stack's empty
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.#head.value;
    }
  }

  /**
   * Retrieves size of the stack
   * @returns {number} number of elements in the stack
   */
  size() {
    return this.#size;
  }
}

module.exports = Stack;
