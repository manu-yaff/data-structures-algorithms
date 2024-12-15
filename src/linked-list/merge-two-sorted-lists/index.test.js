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

    const mergedList = mergeTwoLists(l1.head, l2.head);

    expect(mergedList.value).toBe(1);
  });

  it('should merge two sorted list when both list are empty', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();

    const mergedList = mergeTwoLists(l1.head, l2.head);
    expect(mergedList).toBe(null);
  });

  it('should merge two sorted list when one list is empty', () => {
    const l1 = new LinkedList();
    const l2 = new LinkedList();

    l2.add(0);

    const mergedList = mergeTwoLists(l1.head, l2.head);

    expect(mergedList.value).toBe(0);
    expect(mergedList).toBe(l2.head);
  });
});
