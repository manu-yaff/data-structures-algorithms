/**
 * Linked list
 *
 * Why?
 * - dynamic size
 * - insertion at the front or back is O(1)
 *
 * Operations
 * - insertion O(1) -> insertion in the middle is O(n)
 * - deletion O(n)
 * - insertion O(n)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * assuming we add the value at the end of the list
   *
   * adding a node has only 2 cases:
   * - check case where head = null, then new node is both head == tail
   * - append node onto the end, then update tail reference
   */
  add(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * traverse the list comparing the given value with the current node
   *
   */
  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode === null) return false;

    return true;
  }

  /**
   * we need to account for the cases:
   * 1 - list is empty
   * 2 - node to be removed is the only node
   * 3 - removing the head node
   * 4 - removing the tail node
   * 5 - node to be removed is between head and tail
   * 6 - value does not exist on the list
   */
  remove(value) {
    // case 1
    if (this.head === null) return false;

    let currentNode = this.head;

    if (currentNode.value === value) {
      if (this.head === this.tail) {
        // case 2
        this.head = this.tail = null;
      } else {
        // case 3
        this.head = this.head.next;
      }
      return true;
    }

    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next !== null) {
      if (currentNode.next === this.tail) {
        // case 4
        this.tail = currentNode;
      }

      // case 5
      currentNode.next = currentNode.next.next;

      return true;
    }

    // case 6, value was not found
    return false;
  }

  /**
   * helper to display list elements
   * for testing purposes
   */
  static print(head) {
    let currentNode = head;

    while (currentNode !== null) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  /**
   * helper to get list as an array of elements
   * for testing purposes
   */
  static getAsArray(head) {
    const array = [];

    let currentNode = head;

    while (currentNode !== null) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return array;
  }
}

module.exports = LinkedList;
