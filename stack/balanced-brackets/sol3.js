// Time: O(n), Space O(n)
function balancedBrackets(string) {
	let stack  = [];
	let top = "";
	
  const brackets = {
		"(" : ")",
		"[" : "]",
		"{" : "}"
	}
	
	const closingBrackets = ')]}';	
	
	for (const char of string) {
		if (stack.length === 0 && (char in brackets || closingBrackets.includes(char))) {
			stack.push(char);
		} else if (top in brackets) {
			if (char === brackets[top]) {
				stack.pop();
			} else if (char in brackets || closingBrackets.includes(char)) {
				stack.push(char);
			}
		} else if (closingBrackets.includes(char)) {
			stack.push(char);
		}
		
		top = stack[stack.length - 1];
	}
	return stack.length === 0;
}

