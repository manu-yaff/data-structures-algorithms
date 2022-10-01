import Queue from "../src/queue/queue";
import { expect } from 'chai';

describe("queue tests", function (){
  it("should enqueue and dequeue items correctly", function (){
    const q = new Queue<number>;
    expect(q.length).to.equal(0);
    q.enqueue(4);
    expect(q.peek()).to.equal(4);
    q.enqueue(1);
    q.enqueue(2);
    expect(q.length).to.equal(3);
    q.enqueue(8.4)
    expect(q.peek()).to.equal(4);
    expect(q.dequeue()).to.equal(4);
    expect(q.dequeue()).to.equal(1);
    expect(q.dequeue()).to.equal(2);
    expect(q.length).to.equal(1);
    expect(q.dequeue()).to.equal(8.4);
    expect(q.length).to.equal(0);
  });
})
