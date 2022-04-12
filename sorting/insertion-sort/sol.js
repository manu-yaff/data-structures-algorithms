// Time: O(n^2), Space: O(1)
function insertionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let sorted = i;
		while (array[sorted + 1] < array[sorted] && sorted >= 0) {
			let help = array[sorted];
			array[sorted] = array[sorted + 1];
			array[sorted + 1] = help;
			sorted--;
		}
	}
	return array;
}
