/**
 * Class representing a Queue
 */
class Queue {
  #list;
  #size;

  constructor() {
    this.#list = [];
    this.#size = 0;
  }

  /**
   * Adds item to the queue. In this case, enqueue takes O(n) because of unshift
   * @param {any} item
   */
  enqueue(item) {
    this.#list.unshift(item);

    this.#size += 1;
  }

  /**
   *
   * @returns {(any | null)} The element removed or null if queue is empty
   */
  dequeue() {
    if (this.size() > 0) {
      const poppedItem = this.#list.pop();

      this.#size -= 1;

      return poppedItem;
    }

    return null;
  }

  /**
   * Checks if the queue is empty
   * @returns {boolean} If the queue is empty, false otherwise
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Retrieves the queue's size
   * @returns {number} The size of the queue
   */
  size() {
    return this.#list.length;
  }
}

module.exports = Queue;
