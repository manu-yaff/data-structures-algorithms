// O(n log(n)) | O(1)

function arrayContainZero(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) return true
	}
	return false;
}

function twoNumberSum(array, targetSum) {
  let p1 = 0;
	let p2 = array.length - 1;
	
	if (array.length === 1) { return []; }
	
	array.sort((a, b) => { return a - b });
	
	while (p1 < p2) {
		if (array[p1] === targetSum || array[p2] === targetSum) {
			if (arrayContainZero(array)) {
				return [0, array[p1] === targetSum ? array[p1] : array[p2]];
			}
		}
		if (array[p1] + array[p2] === targetSum) {
			return [array[p1], array[p2]]
		}
		if (array[p1] + array[p2] < targetSum) {
			p1 = p1 + 1;
		} else {
			p2 = p2 - 1;
		}
	}
	
	return [];
	
}

