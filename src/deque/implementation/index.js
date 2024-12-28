class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Class representing a deque
 */
class Deque {
  #size;
  #front;
  #rear;

  constructor() {
    this.#size = 0;
    this.#front = null;
    this.#rear = null;
  }

  /**
   * Adds element to the front of deque
   * @param {any} item The element to be added
   */
  addFront(item) {
    const newNode = new Node(item);

    if (this.isEmpty()) {
      this.#front = this.#rear = newNode;
    } else {
      newNode.next = this.#front;
      this.#front = newNode;
    }

    this.#size += 1;
  }

  /**
   * Adds element to the rear of deque
   * @param {any} item The element to be added
   */
  addRear(item) {
    const newNode = new Node(item);

    if (this.isEmpty()) {
      this.#rear = this.#front = newNode;
    } else {
      this.#rear.next = newNode;
      this.#rear = newNode;
    }

    this.#size += 1;
  }

  /**
   * Removes element from the front of the deque
   * @returns {(any | null)} The element removed or null if deque's empty
   */
  removeFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      const removedItem = this.#front;

      if (this.size() === 1) {
        this.#front = this.#rear = null;
      } else {
        this.#front = this.#front.next;
      }

      this.#size -= 1;

      return removedItem.value;
    }
  }

  /**
   * Removes element from the rear of the deque
   * @returns {(any | null)} The element removed or null if deque's empty
   */
  removeRear() {
    if (this.isEmpty()) {
      return null;
    } else {
      const removedItem = this.#rear;

      if (this.#size === 1) {
        this.#front = this.#rear = null;
      } else {
        const prev = this.#findPrevRear();

        prev.next = null;

        this.#rear = prev;
      }

      this.#size -= 1;

      return removedItem.value;
    }
  }

  /**
   * Checks if deque is empty
   * @returns {boolean} True if deque's empty, otherwise false
   */
  isEmpty() {
    return this.#size === 0;
  }

  /**
   * Retrieves deque's size
   * @returns {number} The size deque's size
   */
  size() {
    return this.#size;
  }

  /**
   * Retrieves reference to the front node
   * @returns {Node} Reference to front node
   */
  getFront() {
    return this.#front;
  }

  /**
   * Retrieves reference to the rear node
   * @returns {Node} Reference to rear node
   */
  getRear() {
    return this.#rear;
  }

  /**
   * Retrieves previous node to rear
   * @returns {(Node | null)} Reference to prev node to rear, or null if size <= 1
   */
  #findPrevRear() {
    if (this.size() <= 1) {
      return null;
    } else {
      let prev = this.#front;

      while (prev.next.next !== null) {
        prev = prev.next;
      }

      return prev;
    }
  }
}

module.exports = Deque;
