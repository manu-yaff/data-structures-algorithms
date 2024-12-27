class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Class representing a Queue
 */
class Queue {
  #size;
  #head;
  #tail;

  constructor() {
    this.#size = 0;
    this.#head = null;
    this.#tail = null;
  }

  /**
   * Adds item to the queue
   * @param {any} item that is added to the queue
   */
  enqueue(item) {
    const newNode = new Node(item);

    if (this.isEmpty()) {
      this.#head = this.#tail = newNode;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }

    this.#size += 1;
  }

  /**
   * Removes element from the queue and returns it
   * @returns {(any|null)} The element removed from the queue
   */
  dequeue() {
    const poppedValue = this.#head;

    if (this.isEmpty()) {
      return null;
    } else {
      if (this.size() === 1) {
        this.#head = this.#tail = null;
      } else {
        this.#head = this.#head.next;
      }
    }

    this.#size -= 1;

    return poppedValue.value;
  }

  /**
   * Checks if queue is empty
   * @returns {boolean} True is the queue is empty, false otherwise
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Retrieves the queue's size
   * @returns {number} The queue's size
   */
  size() {
    return this.#size;
  }

  /**
   *
   * @returns {(any | null)} The reference to the tail node
   */
  getTail() {
    return this.#tail?.value ?? null;
  }

  /**
   *
   * @returns {(any | null)} The reference to the head node
   */
  getHead() {
    return this.#head?.value ?? null;
  }
}

module.exports = Queue;
