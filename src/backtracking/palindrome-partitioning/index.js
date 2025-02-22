/**
 * Palindrome Partitioning
 * Link: https://leetcode.com/problems/palindrome-partitioning/
 */
function partition(s) {
  const ans = [];
  const n = s.length;

  function dfs(start, partition) {
    if (start === n) {
      ans.push([...partition]);
      return;
    }

    for (let end = start + 1; end < n + 1; end++) {
      const prefix = s.substring(start, end);

      if (isPalindrome(prefix)) {
        partition.push(prefix);
        dfs(end, partition);
        partition.pop();
      }
    }
  }

  dfs(0, []);

  return ans;
}

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}
