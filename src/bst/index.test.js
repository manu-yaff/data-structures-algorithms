const BinarySearchTree = require('./index');

describe(BinarySearchTree.name, () => {
  describe(BinarySearchTree.prototype.put.name, () => {
    it('should set node as root when bst is empty', () => {
      // Arrange
      const bst = new BinarySearchTree();

      // Act
      bst.put(100, 'root');

      // Assert
      expect(bst.root.val).toEqual('root');
    });

    it('should put smaller elements to the left', () => {
      // Arrange
      const bst = new BinarySearchTree();
      bst.put(100, 'root');

      // Act
      bst.put(50, 'left child');

      // Assert
      expect(bst.root.leftChild.val).toEqual('left child');
    });

    it('should put bigger elements to the right', () => {
      // Arrange
      const bst = new BinarySearchTree();

      // Act
      bst.put(100, 'root');
      bst.put(120, 'right child');

      // Assert
      expect(bst.root.rightChild.val).toEqual('right child');
    });
  });

  describe(BinarySearchTree.prototype.get.name, () => {
    it('should return null for key that is not in the tree', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 'root');
      bst.put(120, 'right child');
      bst.put(50, 'left child');

      // Act
      const value = bst.get(300);

      // Assert
      expect(value).toEqual(null);
    });

    it('should return the value for the given key that is in the tree', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);
      bst.put(120, 120);
      bst.put(50, 50);
      bst.put(30, 20);
      bst.put(20, 20);
      bst.put(125, 125);

      // Act
      const value = bst.get(20);

      // Assert
      expect(value).toEqual(20);
    });
  });

  describe(BinarySearchTree.prototype.delete.name, () => {
    it('should delete node that has no children and node is the root', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);

      // Act
      bst.delete(100);

      // Assert
      expect(bst.get(100)).toBe(null);
    });

    it('should delete node that has no children and node is not the root', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);
      bst.put(120, 120);
      bst.put(50, 50);
      bst.put(30, 20);
      bst.put(20, 20);
      bst.put(125, 125);

      // Act
      bst.delete(125);

      // Assert
      expect(bst.get(125)).toBe(null);
    });

    it('should delete node when it has one right child and the node is the root', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);
      bst.put(120, 120);

      // Act
      bst.delete(100);

      // Assert
      expect(bst.get(100)).toBe(null);
    });

    it('should delete node when it has one left child and the node is the root', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);
      bst.put(80, 80);

      // Act
      bst.delete(100);

      // Assert
      expect(bst.get(100)).toBe(null);
    });

    it('should delete node when it has one left child and the node is not the root', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);
      bst.put(50, 50);
      bst.put(120, 120);
      bst.put(30, 30);
      bst.put(60, 60);
      bst.put(125, 125);
      bst.put(20, 20);

      // Act
      bst.delete(30);

      // Assert
      expect(bst.get(30)).toBe(null);
    });

    it('should delete node when it has one right child and the node is not the root', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);
      bst.put(50, 50);
      bst.put(120, 120);
      bst.put(30, 30);
      bst.put(60, 60);
      bst.put(125, 125);
      bst.put(20, 20);

      // Act
      bst.delete(120);

      // Assert
      expect(bst.get(120)).toBe(null);
    });

    it('should delete node that has two children', () => {
      // Arrange
      const bst = new BinarySearchTree();

      bst.put(100, 100);
      bst.put(50, 50);
      bst.put(120, 120);
      bst.put(30, 30);
      bst.put(60, 60);
      bst.put(125, 125);
      bst.put(20, 20);

      // Act
      bst.delete(50);

      // Assert
      expect(bst.get(50)).toBe(null);
    });
  });
});
