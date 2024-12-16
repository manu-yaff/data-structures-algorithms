const Queue = require('./index');

describe(Queue.name, () => {
  describe(Queue.prototype.enqueue, () => {
    it('should enqueue elements', () => {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.head.val).toBe(1);
    });

    it('should reset queue', () => {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      queue.dequeue();

      expect(queue.head).toBe(null);
      expect(queue.tail).toBe(null);

      queue.enqueue(3);

      expect(queue.peek()).toBe(3);
      expect(queue.tail.val).toBe(3);
    });
  });

  describe(Queue.prototype.dequeue, () => {
    it('should dequeue elements', () => {
      const queue = new Queue();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.head.val).toBe(3);
    });

    it('should not dequeue from empty list', () => {
      const queue = new Queue();

      expect(() => queue.dequeue()).toThrow();
    });

    it('should dequeue from list with only one element', () => {
      const queue = new Queue();
      queue.enqueue(1);

      expect(queue.peek()).toBe(1);
      expect(queue.dequeue()).toBe(1);
      expect(queue.head).toBe(null);
      expect(queue.tail).toBe(null);
    });
  });

  describe(Queue.prototype.peek, () => {
    it('should return peek', () => {
      const queue = new Queue();

      queue.enqueue(5);
      queue.enqueue(10);

      expect(queue.peek()).toBe(5);

      queue.dequeue();

      expect(queue.peek()).toBe(10);
    });
  });
});
