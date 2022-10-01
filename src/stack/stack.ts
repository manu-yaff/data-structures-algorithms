type Node<T> = {
  value: T;
  next: Node<T> | undefined;
};

export default class Stack<T> {
  public length: number;
  private head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    this.length++;
    const node = { value: item } as Node<T>;
    if (this.head === undefined) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  pop(): T {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }
    const head = this.head as Node<T>;
    this.head = head.next;
    return head.value
  }

  peek(): T {
    return this.head.value;
  }
}
