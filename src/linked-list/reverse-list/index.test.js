const reverseList = require('./index');
const LinkedList = require('../implementation/index');

describe(reverseList.name, () => {
  it('should return null for empty list', () => {
    const list = new LinkedList();

    expect(reverseList(list.head)).toBe(null);
  });

  it('should return the same element when list has only one element', () => {
    const list = new LinkedList();
    list.add(1);

    const reversedHead = reverseList(list.head);

    expect(reversedHead.value).toBe(1);
  });

  it('should return head of inverted list', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);

    const reversedHead = reverseList(list.head);

    expect(reversedHead.value).toBe(3);
  });
});
