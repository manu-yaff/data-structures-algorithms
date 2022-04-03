// Time O(n), Space: O(1)
function getNthFib(n) {
	if (n === 1) return 0;
	if (n === 2) return 1;
	
	let s0 = 0;
	let s1 = 1;
	
	let result = 0;
	
	for (let i = 2; i < n; i++) {
		result = s0 + s1;
		s0 = s1;
		s1 = result;
	}
	
	return result;
	
}

