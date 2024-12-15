const LinkedList = require('../implementation/index');
const deleteDuplicates = require('./index');

describe(deleteDuplicates.name, () => {
  it('should delete duplicates from empty list', () => {
    const l = new LinkedList();

    const newListHead = deleteDuplicates(l.head);

    expect(newListHead).toEqual(l.head);
  });

  it('should delete duplicates from one-single element list', () => {
    const l = new LinkedList();
    l.add(1);

    const newListHead = deleteDuplicates(l.head);

    expect(newListHead).toEqual(l.head);
  });

  it('should delete duplicates from list', () => {
    const l = new LinkedList();
    l.add(1);
    l.add(1);
    l.add(2);
    l.add(3);
    l.add(3);

    const newListHead = deleteDuplicates(l.head);
    const newList = LinkedList.getAsArray(newListHead);

    expect(newList).toEqual([1, 2, 3]);
  });
});
