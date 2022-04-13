class MinMaxStack {
	
	constructor () {
		this.array = [];
		this.historyMin = [];
		this.historyMax = [];
	}
	
	// O(1)
	getLength () {
		return this.array.length;
	}
	
	// O(1)
	empty () {
		return this.array.length === 0;
	}
	
	// O(1)
  peek() {
    return this.array[this.getLength() - 1];
  }

	// O(1)
  pop() {
		if (!this.empty()) {
			const poped = this.array.pop();
			if (poped === this.historyMax[this.historyMax.length - 1]) {
				this.historyMax.pop();
			}
			if (poped === this.historyMin[this.historyMin.length - 1]) {
				this.historyMin.pop();
			}
			return poped;
		}
  }

	// O(1)
  push(number) {
		if (this.empty()) {
			this.historyMax.push(number);
			this.historyMin.push(number);
		} else {
			if (number >= this.historyMax[this.historyMax.length - 1]) {
				this.historyMax.push(number);
			}
			if (number <= this.historyMin[this.historyMin.length - 1]) {
				this.historyMin.push(number);
			}
		}
    this.array.push(number);
  }

	// O(1)
  getMin() {
		return this.historyMin[this.historyMin.length - 1];
  }

	// O(1)
  getMax() {
		return this.historyMax[this.historyMax.length - 1];
  }
}
