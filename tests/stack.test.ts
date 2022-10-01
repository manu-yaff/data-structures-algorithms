import { expect } from "chai";
import Stack from "../src/stack/stack";

describe("Stack tests", function () {
  it("should push and pop items correclty", function () {
    const s = new Stack<number>();
    expect(s.length).to.equal(0);
    s.push(4);
    s.push(9);
    expect(s.peek()).to.equal(9);
    s.push(1);
    expect(s.length).to.equal(3);
    expect(s.length).to.not.equal(0);
    s.push(8.4);
    expect(s.pop()).to.equal(8.4);
    expect(s.pop()).to.equal(1);
    expect(s.length).to.equal(2);
    expect(s.pop()).to.equal(9);
    expect(s.length).to.equal(1);
    expect(s.pop()).to.equal(4);
    expect(s.length).to.equal(0);
  });

  it("should push and pop correctly", function () {
    const s = new Stack<number>();
    s.push(5);
    s.push(7);
    s.push(9);
    expect(s.pop()).to.equal(9);
    expect(s.length).to.equal(2);
    s.push(11);
    expect(s.pop()).to.equal(11);
    expect(s.pop()).to.equal(7);
    expect(s.peek()).to.equal(5);
    expect(s.pop()).to.equal(5);
    expect(s.pop()).to.equal(undefined);
    s.push(69);
    expect(s.peek()).to.equal(69);
    expect(s.length).to.equal(1);
  });
});
