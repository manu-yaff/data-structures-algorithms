const LinkedList = require('../implementation/index');
const mergeTwoLists = require('./index');

describe(mergeTwoLists.name, () => {
  it('should merge two sorted lists', () => {
    const l1 = new LinkedList();
    l1.add(1);
    l1.add(2);
    l1.add(4);

    const l2 = new LinkedList();
    l2.add(1);
    l2.add(3);
    l2.add(4);

    const mergedListHead = mergeTwoLists(l1.head, l2.head);
    const newList = LinkedList.getAsArray(mergedListHead);

    expect(newList).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('should merge two sorted list when both list are empty', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();

    const mergedListHead = mergeTwoLists(l1.head, l2.head);
    expect(mergedListHead).toBe(null);
  });

  it('should merge two sorted list when one list is empty', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();

    l2.add(0);

    const mergedListHead = mergeTwoLists(l1.head, l2.head);

    expect(mergedListHead.val).toBe(0);
    expect(mergedListHead).toBe(l2.head);
  });
});
