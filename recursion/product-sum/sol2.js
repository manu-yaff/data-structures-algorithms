// Time: O(n), Space O(d)
function productSum(array, multiplier = 1) {
	let sum = 0;
  for (const item of array) {
		if (Array.isArray(item)) {
			sum += productSum(item, multiplier + 1);
		} else {
			sum += item;
		}
	}
	return multiplier * sum;
}

