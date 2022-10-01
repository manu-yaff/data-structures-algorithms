type Node<T> = {
  value: T | undefined;
  next: Node<T> | undefined;
};

export default class Queue<T> {
  length: number;
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (this.tail === undefined) {
      this.tail = this.head = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T {
    if (this.head === undefined) {
      return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = head.next;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
