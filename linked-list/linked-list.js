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
}

function assert(condition, message) {
  console.assert(condition, message);

  if (!condition) throw new Error(message);
}

const list = new LinkedList();

// add and contains
list.add(1);
list.add(2);

assert(list.contains(1) === true, 'Error in contains');
assert(list.contains(2) === true, 'Error in contains');
assert(list.contains(3) === false, 'Error in contains');

const emptyList = new LinkedList();
assert(emptyList.contains(1) === false, 'Error in contains');

// remove from empty list
const l1 = new LinkedList();
assert(l1.remove(1) === false, 'Error while removing from empty list');

// remove from list with just one element
const l2 = new LinkedList();
l2.add(1);
assert(l2.remove(1) === true, 'Error while removing from list with just one element');

// remove head node
const l3 = new LinkedList();
l3.add(23);
assert(l3.remove(23) === true, 'Error while removing head node');

// remove tail node
const l4 = new LinkedList();
l4.add(29);
l4.add(19);
l4.add(39);
l4.add(84);
assert(l4.remove(84) === true, 'Error while removing tail node');
assert(l4.contains(84) === false, 'Error while removing tail node');

// remove between head and tail
const l5 = new LinkedList();
l5.add(1);
l5.add(2);
l5.add(3);
assert(l5.remove(2) === true, 'Error while removing node between node and tail');

// element is not in the list
const l6 = new LinkedList();
l6.add(100);
l6.add(500);
l6.add(5800);
assert(l6.remove(1) === false, 'Error while removing node that is not present in list');
