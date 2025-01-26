/*
 * 3Sum Closest
 * https://leetcode.com/problems/3sum-closest/description/
 */
function threeSumClosest(arr, target) {
  arr.sort((a, b) => a - b);

  // [diff, sum]
  const minTriplet = [Infinity, 0];

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(target - sum);

      if (diff === 0) return minTriplet[1];

      if (diff < minTriplet[0]) {
        minTriplet[0] = diff;
        minTriplet[1] = sum;
      } else if (diff === minTriplet[0] && sum < minTriplet[1]) {
        minTriplet[0] = diff;
        minTriplet[1] = sum;
      }

      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return minTriplet[1];
}

module.exports = threeSumClosest;
