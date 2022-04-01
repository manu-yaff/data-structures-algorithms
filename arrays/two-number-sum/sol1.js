// O (n^2)
function twoNumberSum(array, targetSum) {
	if (array.length === 1) return [];
	
	for(let j = 0; j < array.length - 1; j++) {
		for (let i = j; i < array.length - 1; i++) {
			if (array[j] + array[i+1] === targetSum) return [array[j], array[i+1]]
		}	
	}
	
	return []
}


