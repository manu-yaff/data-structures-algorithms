const Queue = require('./index');

describe(Queue.name, () => {
  describe(Queue.prototype.enqueue.name, () => {
    it('should enqueue elements at the rear when queue is empty', () => {
      // Arrange
      const queue = new Queue();

      // Act
      queue.enqueue(8);

      // Assert
      expect(queue.getTail()).toBe(8);
    });

    it('should enqueue elements at the rear when queue is not empty', () => {
      // Arrange
      const queue = new Queue();

      // Act
      queue.enqueue(8);
      queue.enqueue(10);
      queue.enqueue(38);
      queue.enqueue(16);

      // Assert
      expect(queue.getTail()).toBe(16);
    });
  });

  describe(Queue.prototype.dequeue.name, () => {
    it('should return null when queue is empty', () => {
      // Arrange
      const queue = new Queue();

      // Act
      const value = queue.dequeue();

      // Assert
      expect(value).toBe(null);
    });

    it('should return value dequeued when queue is not empty', () => {
      // Arrange
      const queue = new Queue();
      queue.enqueue(1290);
      queue.enqueue(8);

      // Act
      const value = queue.dequeue();

      // Assert
      expect(value).toBe(1290);
    });

    it('should set head and tail to null when dequeuing from single element queue', () => {
      // Arrange
      const queue = new Queue();
      queue.enqueue(0);

      // Act
      const value = queue.dequeue();

      // Assert
      expect(value).toBe(0);
      expect(queue.getHead()).toBe(null);
      expect(queue.getTail()).toBe(null);
    });
  });

  describe(Queue.prototype.size, () => {
    it('should return 0 for empty queue', () => {
      // Arrange
      const queue = new Queue();

      // Act
      const size = queue.size();

      // Assert
      expect(size).toBe(0);
    });

    it('should return size for non-empty queue', () => {
      // Arrange
      const queue = new Queue();
      queue.enqueue(19);
      queue.enqueue(19);
      queue.enqueue(19);

      // Act
      const size = queue.size();

      // Assert
      expect(size).toBe(3);
    });
  });

  describe(Queue.prototype.isEmpty.name, () => {
    it('should return true for empty queue', () => {
      // Arrange
      const queue = new Queue();

      // Act
      const isEmpty = queue.isEmpty();

      // Assert
      expect(isEmpty).toBe(true);
    });

    it('should return false for non-empty queue', () => {
      // Arrange
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(1);
      queue.enqueue(1);

      // Act
      const isEmpty = queue.isEmpty();

      // Assert
      expect(isEmpty).toBe(false);
    });
  });
});
