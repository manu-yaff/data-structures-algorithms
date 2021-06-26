const assert = require('chai').assert
const linearSearch = require('../algorithms/searching/linear-search/linear-search')

describe('Linear Search', function () {
	it('Should return 1', function () {
		assert.equal(linearSearch([10, 15, 20, 25, 30], 15), 1)
	})
	it('Should return 5', function () {
		assert.equal(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4), 5)
	})
	it('Should return 0', function () {
		assert.equal(linearSearch([100], 100), 0)
	})
	it('Should return -1', function () {
		assert.equal(linearSearch([1, 2, 3, 4, 5], 6), -1)
	})
	it('Should return -1', function () {
		assert.equal(linearSearch([9, 8, 7, 5, 4, 3, 2, 1, 0], 10), -1)
	})
	it('Should return -1', function () {
		assert.equal(linearSearch([100], 200), -1)
	})
})
