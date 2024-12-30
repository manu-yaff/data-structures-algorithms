class Node {
  #data;
  #next;

  constructor(data, next = null) {
    this.#data = data;
    this.#next = next;
    Object.freeze(this);
  }

  setData(data) {
    this.#data = data;
  }

  getData() {
    return this.#data;
  }

  setNext(next) {
    this.#next = next;
  }

  getNext() {
    return this.#next;
  }
}

/**
 * Class representing unordered linked list
 */
class LinkedList {
  #head;

  constructor() {
    this.#head = null;

    Object.freeze(this);
  }

  /**
   * Adds item to the start of the list
   * @param {any} item The item to be added
   */
  add(item) {
    const newNode = new Node(item);

    newNode.setNext(this.getHead());

    this.#head = newNode;
  }

  /**
   * Adds item to the end of the list
   * @param {any} item The item to be added
   */
  append(item) {
    const newNode = new Node(item);

    if (this.#head === null) {
      return this.add(item);
    } else {
      const lastPosition = this.getLength() - 1;

      const prevOfLast = this.#findPrevOfPosition(lastPosition);

      // means there is no prev cause the list is only 1 element
      if (prevOfLast === null) {
        this.#head.setNext(newNode);
      } else {
        const lastItem = prevOfLast.getNext();

        lastItem.setNext(newNode);
      }
    }
  }

  /**
   * Inserts item at the given position
   * @param {number} pos The position where the element will be inserted
   * @param {any} item The item to be added
   */
  insertAt(pos, item) {
    const listLength = this.getLength();
    const newNode = new Node(item);

    if (pos > listLength - 1) {
      return;
    } else {
      if (listLength === 1) {
        this.add(item);
      } else {
        const prevOfPosition = this.#findPrevOfPosition(pos);
        const currentNode = prevOfPosition.getNext();

        prevOfPosition.setNext(newNode);
        newNode.setNext(currentNode);
      }
    }
  }

  /**
   * Removes the item from the list. Assumes the item is in the list
   * @param {any} item The item to be remove
   * @returns {any} Returns the removed item
   */
  remove(item) {
    if (this.#head !== null) {
      // list has only one element
      if (this.#head.getNext() === null) {
        const temp = this.#head;

        this.#head = null;

        return temp.getData();
      } else {
        const prevOfItem = this.#findPrevOfItem(item);
        const currentItem = prevOfItem.getNext();

        prevOfItem.setNext(currentItem.getNext());

        return currentItem.getData();
      }
    }
  }

  /**
   * Removes the last element of the list
   * @returns {(any | null)} The last element of the list or null if empty list
   */
  pop() {
    if (this.#head === null) {
      return null;
    } else if (this.#head.getNext() === null) {
      const temp = this.#head;

      this.#head = null;

      return temp.getData();
    } else {
      const lastPosition = this.getLength() - 1;

      const prevOfItem = this.#findPrevOfPosition(lastPosition);
      const lastItem = prevOfItem.getNext();

      prevOfItem.setNext(lastItem.getNext());

      return lastItem.getData();
    }
  }

  /**
   * Removes item at the given position
   * @param {number} post The position of the item to be removed
   * @returns {(any)} Item removed
   */
  popAt(pos) {
    const length = this.getLength();
    const lastIndex = length - 1;

    if (pos > lastIndex && length < 1) {
      return;
    } else if (pos === 0) {
      const temp = this.#head;

      this.#head = this.#head.getNext();

      return temp.getData();
    } else {
      const prev = this.#findPrevOfPosition(pos);
      const itemToRemove = prev.getNext();

      prev.setNext(itemToRemove.getNext());

      return itemToRemove.getData();
    }
  }

  /**
   * Checks if given item is in the list
   * @param {any} item The item to be found
   * @returns {boolean} True if item is found in the list, false otherwise
   */
  contains(item) {
    return Boolean(this.#findItem(item));
  }

  /**
   * Checks if the list is empty
   * @returns {boolean} True if the list is empty, otherwise false
   */
  isEmpty() {
    return this.#head === null;
  }

  /**
   * Retrieves the list length
   * @returns {number} The number of items in the list
   */
  getLength() {
    let counter = 0;
    let current = this.#head;

    while (current !== null) {
      current = current.getNext();
      counter++;
    }

    return counter;
  }

  /**
   * Retrieves the index of the given item, starting at 0
   * @param {any} item The item which will be used to find the index
   * @returns {(number | null)} The item's index, or null if item is not in the list
   */
  getIndexOfItem(item) {
    let count = 0;
    let current = this.#head;

    while (current !== null && current.getData() !== item) {
      current = current.getNext();
      count++;
    }

    if (current === null) {
      return null;
    } else {
      return count;
    }
  }

  /**
   * Retrieves head
   * @returns {(Node | null)} The head pointer
   */
  getHead() {
    return this.#head;
  }

  /**
   * Retrieves list items in an array. The first item in the array is head.
   * Use for testing purposes
   * @returns {Array} Array containing the list elements
   */
  getAsArray() {
    const array = [];

    let current = this.#head;

    while (current !== null) {
      array.push(current.getData());
      current = current.getNext();
    }

    return array;
  }

  /**
   * Retrieves the given item's node
   * @param {any} item The item to be found
   * @returns {(Node | null)} The node found, or null if not found
   */
  #findItem(item) {
    let current = this.#head;

    while (current !== null && current.getData() !== item) {
      current = current.getNext();
    }

    return current;
  }

  /**
   * Finds the previous element of the given item
   * @param {any} item Item who will be used to find prev
   * @returns {(Node | null)} The previous node of item, or null
   */
  #findPrevOfItem(item) {
    let current = this.#head;
    let prev = null;

    while (current !== null && current.getData() !== item) {
      prev = current;
      current = current.getNext();
    }

    return prev;
  }

  /**
   * Finds the previous node of the given position
   * @param {any} pos Position which will be used to find prev
   * @returns {(Node | null)} The previous node of position, or null
   */
  #findPrevOfPosition(pos) {
    let current = this.#head;
    let prev = null;
    let counter = 0;

    while (current !== null && counter < pos) {
      prev = current;
      current = current.getNext();
      counter++;
    }

    return prev;
  }
}

module.exports = LinkedList;
