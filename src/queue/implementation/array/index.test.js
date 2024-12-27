const Queue = require('./index');

describe(Queue.name, () => {
  describe(Queue.prototype.enqueue.name, () => {
    it('should add elements to the queue', () => {
      // Arrange
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      // Act
      const size = queue.size();

      // Assert
      expect(size).toBe(3);
    });
  });

  describe(Queue.prototype.dequeue.name, () => {
    it('should dequeue elements', () => {
      // Arrange
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      // Act & Assert
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.size()).toBe(1);
    });

    it('should return null when trying to dequeue from empty list', () => {
      // Arrange
      const queue = new Queue();

      // Act
      const result = queue.dequeue();

      // Assert
      expect(result).toBe(null);
    });

    it('should dequeue from list with only one element', () => {
      // Arrange
      const queue = new Queue();
      queue.enqueue(1);

      // Act
      const result = queue.dequeue();

      // Assert
      expect(result).toBe(1);
    });
  });

  describe(Queue.prototype.isEmpty.name, () => {
    it('return true when queue is empty', () => {
      // Arrange
      const queue = new Queue();

      // Act
      const isEmpty = queue.isEmpty();

      // Assert
      expect(isEmpty).toBe(true);
    });

    it('return false when queue is not empty', () => {
      // Arrange
      const queue = new Queue();
      queue.enqueue(200);

      // Act
      const isEmpty = queue.isEmpty();

      // Assert
      expect(isEmpty).toBe(false);
    });
  });

  describe(Queue.prototype.size.name, () => {
    it('should get queue size', () => {
      // Arrange
      const queue = new Queue();
      queue.enqueue(9);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(6);

      // Act
      const size = queue.size();

      // Assert
      expect(size).toBe(4);
    });
  });
});
