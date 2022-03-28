// Time: O(n), Space O(1)
function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
	let sequenceIndex = 0;
	
	while (arrayIndex < array.length) {
		if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++;
		arrayIndex++;
	}
	return sequenceIndex === sequence.length;
}
