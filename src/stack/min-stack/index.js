const MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.length === 0 || val <= this.getMin()) {
    this.minStack.push(val);
  }
};

MinStack.prototype.pop = function () {
  const poppedValue = this.stack.pop();

  if (poppedValue === this.getMin()) {
    this.minStack.pop();
  }

  return poppedValue;
};

MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
};

// Time complexity O(1)
// Space complexity O(n)
MinStack.prototype.getMin = function () {
  if (this.stack.length > 0) {
    return this.minStack[this.minStack.length - 1];
  }
};

module.exports = MinStack;
