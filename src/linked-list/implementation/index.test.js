const LinkedList = require('./index');

describe(LinkedList.name, () => {
  describe(LinkedList.prototype.add, () => {
    it('should numbers to list', () => {
      const list = new LinkedList();

      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
    });
  });

  describe(LinkedList.prototype.contains, () => {
    const list = new LinkedList();

    list.add(1);
    list.add(2);
    list.add(3);

    it('should return true when item is found in the list', () => {
      expect(list.contains(1)).toBe(true);
    });

    it('should return false when item is found in the list', () => {
      expect(list.contains(400)).toBe(false);
    });
  });

  describe(LinkedList.prototype.remove, () => {
    it('should return false when list is empty', () => {
      const list = new LinkedList();

      expect(list.remove(10)).toBe(false);
      expect(list.contains(10)).toBe(false);
    });

    it('should return true when list contains only the element to be removed', () => {
      const list = new LinkedList();

      list.add(100);

      expect(list.remove(100)).toBe(true);
      expect(list.contains(100)).toBe(false);
    });

    it('should return true when the element to be removed is head', () => {
      const list = new LinkedList();

      list.add(100);
      list.add(200);

      expect(list.remove(100)).toBe(true);
      expect(list.contains(100)).toBe(false);
    });

    it('should return true when the element to be removed is tail', () => {
      const list = new LinkedList();

      list.add(100);
      list.add(200);

      expect(list.remove(200)).toBe(true);
      expect(list.contains(200)).toBe(false);
    });

    it('should return true then the element is between head and tail', () => {
      const list = new LinkedList();

      list.add(100);
      list.add(300);
      list.add(200);

      expect(list.remove(300)).toBe(true);
      expect(list.contains(300)).toBe(false);
    });

    it('should return false when the element is not found in the list', () => {
      const list = new LinkedList();

      list.add(100);
      list.add(300);
      list.add(200);

      expect(list.remove(500)).toBe(false);
      expect(list.contains(500)).toBe(false);
    });
  });
});
