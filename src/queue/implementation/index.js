/**
 * Queue
 *
 * Why?
 * - insertion and deletion is O(1)
 * - follow FIFO principle
 *
 * Operations
 * - insertion O(1)
 * - deletion O(1)
 * - search O(n)
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * places an item at the back of the queue
   */
  enqueue(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * retrieves the item from the front of the queue, and removes it from the
   * queue
   */
  dequeue() {
    if (this.head === null) {
      throw Error('Error dequeueing, queue is empty');
    }

    const deletedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    return deletedNode.val;
  }

  /**
   * retrieves the item at the front of the queue without removing it from the
   * queue
   */
  peek() {
    if (this.head === null) return null;

    return this.head.val;
  }
}

module.exports = Queue;
