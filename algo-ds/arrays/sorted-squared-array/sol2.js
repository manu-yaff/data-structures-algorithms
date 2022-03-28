// Time: O(n), Space: O(n)
function sortedSquaredArray(array) {
  let min = 0;
	let max = array.length - 1;
	const result = new Array(array.length);
	let index = array.length - 1;
	
	while(min <= max) {
		if (Math.abs(array[min]) > Math.abs(array[max])) {
			result[index] = array[min] * array[min]; 
			min++;
		} else {
			result[index] = array[max] * array[max];
			max--;
		}
		index--;
	}
	return result;
}
