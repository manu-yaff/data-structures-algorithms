function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(null, null);

  let h1 = l1;
  let h2 = l2;

  let current = dummy;
  let carry = 0;

  while (h1 !== null && h2 !== null) {
    const value = h1.val + h2.val + carry;
    const newNode = new ListNode(value >= 10 ? value % 10 : value);

    carry = Math.floor(value / 10);

    h1 = h1.next;
    h2 = h2.next;

    current.next = newNode;
    current = newNode;
  }

  while (h1 !== null) {
    let val = h1.val + carry;
    const newNode = new ListNode(val >= 10 ? val % 10 : val);
    carry = Math.floor(val / 10);

    current.next = newNode;
    current = newNode;

    h1 = h1.next;
  }

  while (h2 !== null) {
    let val = h2.val + carry;
    const newNode = new ListNode(val >= 10 ? val % 10 : val);
    carry = Math.floor(val / 10);

    current.next = newNode;
    current = newNode;

    h2 = h2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}
