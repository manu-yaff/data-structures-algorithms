/**
 * LRU Cache
 * Link: https://leetcode.com/problems/lru-cache/description
 */
class Node {
  constructor(key, value) {
    this.key = key; // key is necessary when we want to evict
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();

  this.least = new Node(null, null);
  this.most = new Node(null, null);

  this.least.next = this.most;
  this.most.prev = this.least;
};

LRUCache.prototype.deleteNode = function (node) {
  // delete the node
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.insertNode = function (node) {
  // insert the node at the most
  node.next = this.most;
  node.prev = this.most.prev;

  this.most.prev = node; // this might be wrong
  node.prev.next = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key);

  if (node === undefined) return -1;

  this.deleteNode(node);
  this.insertNode(node);

  return this.map.get(key).val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);

    node.val = value;
    this.deleteNode(node);
    this.insertNode(node);
  } else {
    if (this.map.size >= this.capacity) {
      const nodeToRemove = this.least.next;

      this.map.delete(nodeToRemove.key);
      this.deleteNode(nodeToRemove);
    }

    const newNode = new Node(key, value);

    this.map.set(key, newNode);
    this.insertNode(newNode);
  }
};
