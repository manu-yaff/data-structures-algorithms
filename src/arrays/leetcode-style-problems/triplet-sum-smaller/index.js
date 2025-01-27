/**
 * 3Sum Smaller
 * Link: https://leetcode.com/problems/3sum-smaller/description/
 */
function searchTriplets(arr, target) {
  let count = 0;

  if (arr.length < 3) return 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum >= target) {
        right--;
      } else {
        count = count + (right - left);
        left++;
      }
    }
  }

  return count;
}

console.log(searchTriplets([-1, 4, 2, 1, 3], 5));
