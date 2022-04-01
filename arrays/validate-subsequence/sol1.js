// Time: O(n^2), Space O(1)
function isValidSubsequence(array, sequence) {
	for (const item of array) {
		if (item === sequence[0]) {
			sequence.shift();
		}
	}
	
	return sequence.length === 0 ? true : false;
}
