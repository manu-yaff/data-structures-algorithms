/**
 * Write a function which takes in a string and returns the counts of each character in the string
 * Consider only alphanumeric chars
 * Only consider lower cases chars
 * Example:
 * Input: "Hello"
 * Output: {
 * 	h:1,
 * 	e:1,
 * 	l:2
 * 	o:2
 * }
 */

function charCount(str) {
	// create object
	result = {};
	// for each character
	for (let i=0; i<str.length; i++) {
		let char = str[i];
		if (/[a-zA-Z0-9]/.test(char)) {
			char = char.toLowerCase();
			if (result[char] > 0) {
				result[char] += 1;
			} else {
				result[char] = 1;
			}
		}
	}
	return result;
}

function charCount2(str) {
	let result = {};
	for (let char of str) {
		if (isAlphanumeric(char)) {
			char = char.toLowerCase();
			// if key is undefined set value to 1, otherwise add  1 to value
			result[char] = ++result[char] || 1;
		}
	}
	return result;
}

function isAlphanumeric(char) {
	let code = char.charCodeAt(0);
	if (code >= 65 && code <= 90 || code >= 97 && code <= 122 || code >= 48 && code <= 57) {
		return true;
	} else {
		return false;
	}	
}

console.log(charCount("Hello hi!"));
console.log(charCount2("Hello hi!"));
