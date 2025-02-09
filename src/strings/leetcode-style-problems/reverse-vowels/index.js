/**
 * Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */
function reverseVowels(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let left = 0;
  let right = s.length - 1;
  const arr = s.split('');

  while (left < right) {
    const leftChar = arr[left].toLowerCase();
    const rightChar = arr[right].toLowerCase();

    if (!vowels.includes(leftChar)) {
      left++;
    } else if (!vowels.includes(rightChar)) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}
