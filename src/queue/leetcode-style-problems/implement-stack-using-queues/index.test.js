const MyStack = require('./index');

describe(MyStack.name, () => {
  describe(MyStack.prototype.empty.name, () => {
    it('should return true for empty stack', () => {
      // Arrange
      const stack = new MyStack();

      // Act
      const isEmpty = stack.empty();

      // Assert
      expect(isEmpty).toBe(true);
    });

    it('should return false for non-empty stack', () => {
      // Arrange
      const stack = new MyStack();
      stack.push(1);

      // Act
      const isEmpty = stack.empty();

      // Assert
      expect(isEmpty).toBe(false);
    });
  });

  describe(MyStack.prototype.push.name, () => {
    it('should push element to empty stack', () => {
      // Arrange
      const stack = new MyStack();

      // Act
      stack.push(1);
      stack.push(2);

      // Assert
      expect(stack.empty()).toBe(false);
    });
  });

  describe(MyStack.prototype.pop.name, () => {
    it('should return undefined when popping from empty stack', () => {
      // Arrange
      const stack = new MyStack();

      // Act
      const poppedItem = stack.pop();

      // Assert
      expect(poppedItem).toBe(undefined);
    });

    it('should return popped item', () => {
      // Arrange
      const stack = new MyStack();

      stack.push(1);
      stack.push(2);

      // Act
      const poppedItem = stack.pop();

      // Assert
      expect(poppedItem).toBe(2);
    });
  });

  describe(MyStack.prototype.top.name, () => {
    it('should return item at peek when stack is non-empty', () => {
      // Arrange
      const stack = new MyStack();

      stack.push(1);

      // Act
      const top = stack.top();

      // Assert
      expect(top).toBe(1);
    });

    it('should return undefined when stack is empty', () => {
      // Arrange
      const stack = new MyStack();

      // Act
      const top = stack.top();

      // Assert
      expect(top).toBe(undefined);
    });
  });
});
