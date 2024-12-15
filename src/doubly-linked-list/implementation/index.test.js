const DoublyLinkedList = require('./index');

describe(DoublyLinkedList.name, () => {
  it('should initialize head and tail to null', () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  describe(DoublyLinkedList.prototype.add, () => {
    it('should insert node at tail', () => {
      const list = new DoublyLinkedList();

      list.add(1);
      list.add(2);
      list.add(3);

      expect(list.tail.val).toBe(3);
      expect(list.tail.prev.val).toBe(2);
      expect(list.tail.next).toBe(null);
    });
  });

  describe(DoublyLinkedList.prototype.remove, () => {
    it('should remove head node', () => {
      const list = new DoublyLinkedList();
      list.add(10);
      list.add(5);
      list.add(20);
      list.add(25);

      list.remove(10);
      list.remove(5);

      expect(list.head.val).toBe(20);
      expect(list.tail.val).toBe(25);
    });

    it('should remove tail node', () => {
      const list = new DoublyLinkedList();

      list.add(10);
      list.add(5);
      list.add(20);
      list.add(25);

      list.remove(25);

      expect(list.tail.val).toBe(20);
      expect(list.tail.next).toBe(null);
      expect(list.tail.prev.val).toBe(5);
    });

    it('should remove node when it is the only one in the list', () => {
      const list = new DoublyLinkedList();
      list.add(1);

      list.remove(1);

      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
    });

    it('should remove node that is between head and tail', () => {
      const list = new DoublyLinkedList();
      list.add(1);
      list.add(2);
      list.add(3);

      list.remove(2);

      expect(list.head.val).toBe(1);
      expect(list.head.prev).toBe(null);
      expect(list.head.next.val).toBe(3);

      expect(list.tail.val).toBe(3);
      expect(list.tail.prev.val).toBe(1);
      expect(list.tail.next).toBe(null);
    });
  });

  describe(DoublyLinkedList.prototype.contains, () => {
    it('should return true when list contains value', () => {
      const list = new DoublyLinkedList();

      list.add(10);
      list.add(15);
      list.add(20);

      const result = list.contains(15);

      expect(result).toBe(true);
    });

    it('should return false when list does not contains value', () => {
      const list = new DoublyLinkedList();

      list.add(10);
      list.add(15);
      list.add(20);

      const result = list.contains(670);

      expect(result).toBe(false);
    });
  });
});
