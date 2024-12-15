/**
 * Doubly Linked List
 *
 * why?
 * - the reverse traversal is way easier

 * Operations
 * - insertion O(1) -> insertion in the middle is O(n)
 * - deletion O(n)
 * - insertion O(n)
 * - traversal in reverse order O(n)
 */

class Node {
  constructor(val) {
    this.next = null;
    this.prev = null;
    this.val = val;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * traverse the list comparing the given val with the current node
   *
   */
  contains(val) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.val !== val) {
      currentNode = currentNode.next;
    }

    return Boolean(currentNode);
  }

  /**
   * assuming we add the val at the end of the list
   *
   * adding a node has only 2 cases:
   * - check case where head = null, then new node is both head == tail
   * - append node onto the end, then update tail reference
   *
   * additionally, we need to bind the prev pointer if n is not the first node to be inserted
   */
  add(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;

      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  /**
   * we need to account for the cases:
   * 1 - list is empty
   * 2 - node to be removed is the only node
   * 3 - removing the head node
   * 4 - removing the tail node
   * 5 - node to be removed is between head and tail
   * 6 - val does not exist on the list
   *
   * additionally we need to bind prev pointer to the correct value
   */
  remove(val) {
    if (this.head === null) {
      return false;
    }

    if (val === this.head.val) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }

      return true;
    }

    let currentNode = this.head.next;

    while (currentNode !== null && val !== currentNode.val) {
      currentNode = currentNode.next;
    }

    // case removing from the end
    if (currentNode === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return true;
    } else if (currentNode !== null) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      return true;
    }

    return false;
  }

  static reverseTraversal(tail) {
    let currentNode = tail;

    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.prev;
    }
  }
}

module.exports = DoublyLinkedList;
