// Time: O(n), Space O(n)
function balancedBrackets(string) {
	const stack = [];
	let top = null;
	
	for (const char of string) {
		if (top === null && (char === '(' || char === '[' || char === '{' || char === ')' || char === ']' || char === '}')) {
			stack.push(char);
		} else {
			if (top === '(' ) {
				if (char === ')') {
					stack.pop();
				} else if (char === '[' || char === '{' || char === '(' || char === ')' || char === ']' || char === '}') {
					stack.push(char);
				}
			}
			if (top === '[') {
				if (char === ']') {
					stack.pop();
				} else if (char === '(' || char === '{' || char === '[' || char === ')' || char === ']' || char === '}') {
					stack.push(char);
				}
			}
			if (top === '{') {
				if (char === '}') {
					stack.pop();
				} else if (char === '(' || char === '[' || char === '{' || char === ')' || char === ']' || char === '}') {
					stack.push(char);
				}
			}
		}
	
		if (stack.length === 0) {
			top = null;
		} else {
			top = stack[stack.length - 1];
		}
	}	
	return stack.length === 0;
}
