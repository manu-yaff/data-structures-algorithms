// Time: O(n), Space: O(d)
function productSum(array, multiplier = 1) {
	if (array.length === 0) return 0;
	if (array === 1) return array[0];
	const [first, ...rest] = array;
	if (Array.isArray(first)) {
		return ((multiplier + 1) * productSum(first, multiplier + 1)) + productSum(rest, multiplier); 
	}
	return first + productSum(rest, multiplier);
	
}

