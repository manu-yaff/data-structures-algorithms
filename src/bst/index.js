// TODO: add private properties and clear methods
class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  getLength() {
    return this.size;
  }

  // does not handle duplicates
  put(key, val) {
    if (this.root !== null) {
      this._put(key, val, this.root);
    } else {
      this.root = new TreeNode(key, val);
    }

    this.size = this.size + 1;
  }

  get(key) {
    if (this.root === null) {
      return null;
    } else {
      let res = this._get(key, this.root);

      if (res !== null) {
        return res.val;
      } else {
        return null;
      }
    }
  }

  delete(key) {
    if (this.size > 1) {
      const nodeToRemove = this._get(key, this.root);

      if (nodeToRemove !== null) {
        this.#remove(nodeToRemove);
        this.size = this.size - 1;
      } else {
        throw new Error('Error, key is not in the three');
      }
    } else if (this.size === 1 && this.root.key === key) {
      this.root = null;
      this.size = this.size - 1;
    } else {
      throw new Error('Error, key is not in the three');
    }
  }

  #remove(currentNode) {
    if (currentNode.isLeaf()) {
      // remove left leaf
      if (currentNode.parent.leftChild === currentNode) {
        currentNode.parent.leftChild = null;
      } else {
        // remove right leaf
        currentNode.parent.rightChild = null;
      }
    } else if (currentNode.hasBothChildren()) {
      let succesor = currentNode.findSuccesor();

      succesor.spliceOut();
      currentNode.key = succesor.key;
      currentNode.val = succesor.val;
    } else {
      // means the node has one child

      // need to check which child it has
      if (currentNode.hasLeftChild()) {
        if (currentNode.isLeftChild()) {
          // update parent left child to be the left child of current node
          // and update the parent of current left child to be current node parent
          // and update
          currentNode.leftChild.parent = currentNode.parent;
          currentNode.parent.leftChild = currentNode.leftChild;
        } else if (currentNode.isRightChild()) {
          currentNode.rightChild.parent = currentNode.parent;
          currentNode.parent.rightChild = currentNode.rightChild;
        } else {
          // means it has one child and the current node is the root
          currentNode.replaceNodeData(
            currentNode.leftChild.key,
            currentNode.leftChild.val,
            currentNode.leftChild.leftChild,
            currentNode.leftChild.rightChild
          );
        }
      } else {
        // the child it has is the right one
        if (currentNode.isLeftChild()) {
          currentNode.rightChild.parent = currentNode.parent;
          currentNode.parent.leftChild = currentNode.rightChild;
        } else if (currentNode.isRightChild()) {
          currentNode.rightChild.parent = currentNode.parent;
          currentNode.parent.rightChild = currentNode.rightChild;
        } else {
          // means it has one child and the current node is the root
          currentNode.replaceNodeData(
            currentNode.rightChild.key,
            currentNode.rightChild.val,
            currentNode.rightChild.leftChild,
            currentNode.rightChild.rightChild
          );
        }
      }
    }
  }

  _get(key, currentNode) {
    if (currentNode === null) {
      return null;
    } else if (currentNode.key === key) {
      return currentNode;
    } else if (key < currentNode.key) {
      return this._get(key, currentNode.leftChild);
    } else {
      return this._get(key, currentNode.rightChild);
    }
  }

  _put(key, val, currentNode) {
    if (key < currentNode.key) {
      if (currentNode.hasLeftChild()) {
        this._put(key, val, currentNode.leftChild);
      } else {
        currentNode.leftChild = new TreeNode(key, val, null, null, currentNode);
      }
    } else {
      if (currentNode.hasRightChild()) {
        this._put(key, val, currentNode.rightChild);
      } else {
        currentNode.rightChild = new TreeNode(
          key,
          val,
          null,
          null,
          currentNode
        );
      }
    }
  }
}

class TreeNode {
  constructor(key, val, left = null, right = null, parent = null) {
    this.key = key;
    this.val = val;
    this.leftChild = left;
    this.rightChild = right;
    this.parent = parent;
  }

  hasLeftChild() {
    return Boolean(this.leftChild);
  }

  hasRightChild() {
    return Boolean(this.rightChild);
  }

  isLeftChild() {
    return this.parent && this.parent.leftChild === this;
  }

  isRightChild() {
    return this.parent && this.parent.rightChild === this;
  }

  isRoot() {
    return this.parent === null;
  }

  isLeaf() {
    return this.leftChild === null && this.rightChild === null;
  }

  hasAnyChildren() {
    return Boolean(this.leftChild) || Boolean(this.rightChild);
  }

  hasBothChildren() {
    return Boolean(this.leftChild) && Boolean(this.rightChild);
  }

  replaceNodeData(key, val, leftChild, rightChild) {
    this.key = key;
    this.val = val;
    this.leftChild = leftChild;
    this.rightChild = rightChild;

    if (this.hasLeftChild()) {
      this.leftChild.parent = this;
    }

    if (this.hasRightChild()) {
      this.rightChild.parent = this;
    }
  }

  findSuccesor() {
    let succesor = null;

    if (this.hasRightChild()) {
      succesor = this.rightChild.findMin();
    } else {
      if (this.parent !== null) {
        succesor = this.parent;
      } else {
        this.parent.rightChild = null;
        succesor = this.parent.findSuccesor();
        this.parent.rightChild = this;
      }
    }

    return succesor;
  }

  findMin() {
    let current = this;

    while (current.hasLeftChild()) {
      current = current.leftChild();
    }

    return current;
  }

  // this function deletes the successor
  spliceOut() {
    if (this.isLeaf()) {
      if (this.isLeftChild()) {
        this.parent.leftChild = null;
      } else {
        this.parent.rightChild = null;
      }
    } else if (this.hasAnyChildren()) {
      if (this.hasLeftChild()) {
        if (this.isLeftChild()) {
          this.parent.leftChild = this.leftChild;
        } else {
          this.parent.rightChild = this.leftChild;
        }
        this.leftChild.parent = this.parent;
      } else {
        // has right child
        if (this.isLeftChild()) {
          this.parent.leftChild = this.rightChild;
        } else {
          this.parent.rightChild = this.rightChild;
        }
        this.rightChild.parent = this.parent;
      }
    }
  }
}

module.exports = BinarySearchTree;
