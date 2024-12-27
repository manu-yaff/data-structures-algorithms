const Stack = require('./index');
describe(Stack.name, () => {
  describe(Stack.prototype.isEmpty.name, () => {
    it('should return true for empty stack', () => {
      // Arrange
      const stack = new Stack();

      // Act
      const isEmpty = stack.isEmpty();

      // Assert
      expect(isEmpty).toBe(true);
    });

    it('should return false for non-empty stack', () => {
      // Arrange
      const stack = new Stack();
      stack.push(1);

      // Act
      const isEmpty = stack.isEmpty();

      // Assert
      expect(isEmpty).toBe(false);
    });
  });

  describe(Stack.prototype.push.name, () => {
    it('should push element to empty stack', () => {
      // Arrange
      const stack = new Stack();

      // Act
      stack.push(1);
      stack.push(2);

      // Assert
      expect(stack.isEmpty()).toBe(false);
      expect(stack.size()).toBe(2);
    });
  });

  describe(Stack.prototype.pop.name, () => {
    it('should return undefined when popping from empty stack', () => {
      // Arrange
      const stack = new Stack();

      // Act
      const poppedItem = stack.pop();

      // Assert
      expect(poppedItem).toBe(undefined);
    });

    it('should return popped item', () => {
      // Arrange
      const stack = new Stack();

      stack.push(1);
      stack.push(2);

      // Act
      const poppedItem = stack.pop();

      // Assert
      expect(poppedItem).toBe(2);
    });
  });

  describe(Stack.prototype.peek.name, () => {
    it('should return item at peek when stack is non-empty', () => {
      // Arrange
      const stack = new Stack();

      stack.push(1);

      // Act
      const peek = stack.peek();

      // Assert
      expect(peek).toBe(1);
    });

    it('should return undefined when stack is empty', () => {
      // Arrange
      const stack = new Stack();

      // Act
      const peek = stack.peek();

      // Assert
      expect(peek).toBe(undefined);
    });
  });

  describe(Stack.prototype.size, () => {
    it('should return 0 for empty stack', () => {
      // Arrange
      const stack = new Stack();

      // Act
      const size = stack.size();

      // Assert
      expect(size).toBe(0);
    });

    it('should be incremented when pushing to the stack', () => {
      // Arrange
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      // Act
      const size = stack.size();

      // Assert
      expect(size).toBe(3);
    });

    it('should be decremented when popping from stack', () => {
      // Arrange
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      stack.pop();

      // Act
      const size = stack.size();

      // Assert
      expect(size).toBe(2);
    });
  });
});
