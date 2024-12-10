const reverseTraversal = require('./index');
const LinkedList = require('../implementation/index');

describe(reverseTraversal.name, () => {
  it('should return head for empty or single-element list', () => {
    const list = new LinkedList();

    expect(reverseTraversal(list.head, list.tail)).toBe(null);
  });

  it('should return list in reverse order', () => {
    const list = new LinkedList();

    list.add(1);
    list.add(2);

    const reversedArray = reverseTraversal(list.head, list.tail);

    expect(reversedArray).toEqual([2, 1]);
  });

  it('should return list in reverse order for list with multiple nodes', () => {
    const list = new LinkedList();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);

    const reversedArray = reverseTraversal(list.head, list.tail);

    expect(reversedArray).toEqual([4, 3, 2, 1]);
  });

  it('should return list in reverse order for list with duplicates', () => {
    const list = new LinkedList();

    list.add(10);
    list.add(5);
    list.add(10);
    list.add(20);

    const reversedArray = reverseTraversal(list.head, list.tail);

    expect(reversedArray).toEqual([20, 10, 5, 10]);
  });
});
