// Time: O(n), Space: O(n)
function getNthFib(n, memo = { 1: 0, 2: 1 }) {
  if (n === 1) return 0;
	if (n === 2) return 1;
	if (n in memo) {
		return memo[n];
	} else {
		memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
		return memo[n];
	}
}
