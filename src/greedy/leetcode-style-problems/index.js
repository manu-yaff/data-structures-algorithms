/**
 * Longest Palindrome by Concatenating Two Letter Words
 * Link: https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/description/
 */
function longestPalindrome(words) {
  // count the number of occurrences of each word

  const map = new Map();

  let palindromeLength = 0;
  let centralCount = 0;

  for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
  }

  for (const [word, count] of map.entries()) {
    // palindrome words
    if (word[0] === word[1]) {
      // count the number of times the word can be used in the middle
      centralCount += count % 2;
      // can only put in the middle, if the number is odd
      // if number is even, cannot put them in the middle

      palindromeLength += Math.floor(count / 2) * 4;
    } else {
      palindromeLength +=
        Math.min(count, map.get(word.split('').reverse().join('')) ?? 0) * 2;
    }
  }

  if (centralCount) {
    palindromeLength += 2;
  }

  return palindromeLength;
}
