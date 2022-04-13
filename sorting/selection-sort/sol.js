// Time: O(n^2), Space: O(1)
function selectionSort(array) {
	let min = {};
  for (let i = 0; i < array.length - 1; i++) {
		let sorted = i;
		min.value = array[sorted];
		min.index = sorted;
		for (let j = i + 1; j <= array.length; j++) {
			if (array[j] < min.value) {
				min.value = array[j];
				min.index = j;
			}
		}
		let help = array[sorted];
		array[sorted] = array[min.index];
		array[min.index] = help;
	}
	return array;
}

