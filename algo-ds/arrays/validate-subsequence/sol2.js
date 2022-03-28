// Time: O(n), Space: O(n)
function isValidSubsequence(array, sequence) {
	let next = 0;
	let checked = {};
	
	for (const item of sequence) {
		checked[item] ? checked[item]++ : checked[item] = 1;
	}
	
	for (const item of array) {
		if (item === sequence[next]) {
			checked[item] = checked[item] - 1;
			next++;
		}
	}
	
	for (const item in checked) {
		if (checked[item] !== 0) {
			return false;
		}
	}
	
	return true;
}
