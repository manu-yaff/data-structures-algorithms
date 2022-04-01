function linearSearch (arr, n) {
	let index = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) return index
		index++
	}
	return -1
}

module.exports = linearSearch


