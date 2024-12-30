const LinkedList = require('./index');

describe(LinkedList.name, () => {
  it('should initialize linked list head', () => {
    // Arrange

    // Act
    const l = new LinkedList();

    // Assert
    expect(l.getHead()).toBe(null);
  });

  describe(LinkedList.prototype.isEmpty.name, () => {
    it('should return true for empty list', () => {
      // Arrange
      const l = new LinkedList();

      // Act
      const isEmpty = l.isEmpty();

      // Assert
      expect(isEmpty).toBe(true);
    });

    it('should return false for non empty list', () => {
      // Arrange
      const l = new LinkedList();

      l.add(29);
      l.add(0);
      l.add(10);

      // Act
      const isEmpty = l.isEmpty();

      // Assert
      expect(isEmpty).toBe(false);
      expect(l.getAsArray()).toEqual([10, 0, 29]);
    });
  });

  describe(LinkedList.prototype.getLength.name, () => {
    it('should return 0 for list with 0 items', () => {
      // Arrange
      const l = new LinkedList();

      // Act
      const length = l.getLength();

      // Assert
      expect(length).toBe(0);
      expect(l.getAsArray()).toEqual([]);
    });

    it('should return 5 for list with 5 items', () => {
      // Arrange
      const l = new LinkedList();

      l.add(1);
      l.add(2);
      l.add(3);
      l.add(4);
      l.add(5);

      // Act
      const length = l.getLength();

      // Assert
      expect(length).toBe(5);
      expect(l.getAsArray()).toEqual([5, 4, 3, 2, 1]);
    });
  });

  describe(LinkedList.prototype.add.name, () => {
    it('should add element to the beginning when list is empty', () => {
      // Arrange
      const l = new LinkedList();

      // Act
      l.add(28);

      // Assert
      expect(l.getLength()).toBe(1);
      expect(l.getAsArray()).toEqual([28]);
    });

    it('should add element at the beginning when the list is not empty', () => {
      // Arrange
      const l = new LinkedList();
      l.add(28);
      l.add(2);
      l.add(8);

      // Act
      l.add(90);

      // Assert
      expect(l.getAsArray()).toEqual([90, 8, 2, 28]);
      expect(l.getLength()).toBe(4);
      expect(l.getHead().getData()).toBe(90);
    });
  });

  describe(LinkedList.prototype.contains.name, () => {
    it('should return true when item is found in the list', () => {
      // Arrange
      const l = new LinkedList();
      l.add(28);
      l.add(2);
      l.add(8);

      // Act
      const found = l.contains(28);

      // Assert
      expect(found).toBe(true);
    });

    it('should return false when item is not found in the list', () => {
      // Arrange
      const l = new LinkedList();
      l.add(28);
      l.add(2);
      l.add(8);

      // Act
      const found = l.contains(1298);

      // Assert
      expect(found).toBe(false);
    });
  });

  describe(LinkedList.prototype.getIndexOfItem.name, () => {
    it.each([
      {
        item: 1,
        index: 4,
      },
      {
        item: 2,
        index: 3,
      },
      {
        item: 3,
        index: 2,
      },
      {
        item: 4,
        index: 1,
      },
      {
        item: 5,
        index: 0,
      },
      {
        item: 6,
        index: null,
      },
    ])('should return index $index for item $item', ({ item, index }) => {
      // Arrange
      const l = new LinkedList();

      l.add(1);
      l.add(2);
      l.add(3);
      l.add(4);
      l.add(5);

      // Act
      const result = l.getIndexOfItem(item);

      // Assert
      expect(result).toBe(index);
    });
  });

  describe(LinkedList.prototype.append.name, () => {
    it('should add element to the end of the list when it is empty', () => {
      // Arrange
      const l = new LinkedList();

      // Act
      l.append(58);

      // Assert
      expect(l.getLength()).toBe(1);
      expect(l.getAsArray()).toEqual([58]);
    });

    it('should add element to the end of the list when list has one item', () => {
      // Arrange
      const l = new LinkedList();
      l.add(1);

      // Act
      l.append(58);

      // Assert
      expect(l.getLength()).toBe(2);
      expect(l.getAsArray()).toEqual([1, 58]);
    });

    it('should add element to the end of the list when list has more than one item', () => {
      // Arrange
      const l = new LinkedList();
      l.add(1);
      l.add(2);
      l.add(3);
      l.add(4);

      // Act
      l.append(100);

      // Assert
      expect(l.getLength()).toBe(5);
      expect(l.getAsArray()).toEqual([4, 3, 2, 1, 100]);
    });
  });

  describe(LinkedList.prototype.insertAt.name, () => {
    it('should not add element in a position greater than the list length', () => {
      // Arrange
      const l = new LinkedList();

      // Act
      l.insertAt(0, 10);

      // Assert
      expect(l.getAsArray()).toEqual([]);
    });

    it('should insert item at position 0', () => {
      // Arrange
      const l = new LinkedList();
      l.add(20);

      // Act
      l.insertAt(0, 10);

      // Assert
      expect(l.getAsArray()).toEqual([10, 20]);
    });

    it('should add item into a middle position', () => {
      // Arrange
      const l = new LinkedList();
      l.add(20);
      l.add(30);
      l.add(50); // list = [50, 30, 20]

      // Act
      l.insertAt(1, 19);

      // Assert
      expect(l.getAsArray()).toEqual([50, 19, 30, 20]);
    });

    it('should add item into the last position', () => {
      // Arrange
      const l = new LinkedList();
      l.add(20);
      l.add(30);
      l.add(50); // list = [50, 30, 20]

      // Act
      l.insertAt(2, 40);

      // Assert
      expect(l.getAsArray()).toEqual([50, 30, 40, 20]);
    });
  });

  describe(LinkedList.prototype.remove.name, () => {
    it('should remove element that is found at position 0', () => {
      // Arrange
      const l = new LinkedList();
      l.add(100);

      // Arrange
      const removedItem = l.remove(100);

      // Arrange
      expect(removedItem).toBe(100);
      expect(l.getAsArray()).toEqual([]);
    });

    it('should remove element that is found at the last position', () => {
      // Arrange
      const l = new LinkedList();
      l.add(100);
      l.add(200);
      l.add(300); // [300, 200, 100]

      // Arrange
      const removedItem = l.remove(100);

      // Arrange
      expect(removedItem).toBe(100);
      expect(l.getAsArray()).toEqual([300, 200]);
    });

    it('should remove element that is found between first and last position', () => {
      // Arrange
      const l = new LinkedList();
      l.add(100);
      l.add(99);
      l.add(-1);
      l.add(200);
      l.add(444);
      l.add(300); // [300, 444, 200, -1, 99, 100]

      // Arrange
      const removedItem = l.remove(-1);

      // Arrange
      expect(removedItem).toBe(-1);
      expect(l.getAsArray()).toEqual([300, 444, 200, 99, 100]);
    });
  });

  describe(LinkedList.prototype.pop.name, () => {
    it('should remove element from the end of the list when list has only one element', () => {
      // Arrange
      const l = new LinkedList();
      l.add(100);

      // Arrange
      const removedItem = l.pop();

      // Arrange
      expect(removedItem).toBe(100);
      expect(l.getAsArray()).toEqual([]);
    });

    it('should remove element from the end of the list when list has multiple elements', () => {
      // Arrange
      const l = new LinkedList();
      l.add(100);
      l.add(0);

      // Arrange
      const removedItem = l.pop();

      // Arrange
      expect(removedItem).toBe(100);
      expect(l.getAsArray()).toEqual([0]);
    });
  });

  describe(LinkedList.prototype.popAt.name, () => {
    it('should pop item from position 0', () => {
      // Arrange
      const l = new LinkedList();
      l.add(1);
      l.add(2);
      l.add(3); // [3, 2, 1]

      // Arrange
      const removedItem = l.popAt(0);

      // Arrange
      expect(removedItem).toBe(3);
      expect(l.getAsArray()).toEqual([2, 1]);
    });

    it('should pop item from last position', () => {
      // Arrange
      const l = new LinkedList();
      l.add(1);
      l.add(2);
      l.add(3);
      l.add(4); // [4, 3, 2, 1]

      // Arrange
      const removedItem = l.popAt(3);

      // Arrange
      expect(removedItem).toBe(1);
      expect(l.getAsArray()).toEqual([4, 3, 2]);
    });

    it('should pop item from intermediate position', () => {
      // Arrange
      const l = new LinkedList();
      l.add(1);
      l.add(2);
      l.add(3);
      l.add(4); // [4, 3, 2, 1]

      // Arrange
      const removedItem = l.popAt(2);

      // Arrange
      console.log(l.getAsArray());
      expect(removedItem).toBe(2);
      expect(l.getAsArray()).toEqual([4, 3, 1]);
    });
  });
});
