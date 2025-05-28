/**
 * Missing Number in Arithmetic Progression
 * Link: https://leetcode.com/problems/missing-number-in-arithmetic-progression/description/
 */
function missingNumber(arr) {
  const length = arr.length;
  const difference = Math.floor((arr[length - 1] - arr[0]) / length);

  let expected = arr[0];

  for (let i = 0; i < length; i++) {
    if (expected !== arr[i]) {
      return expected;
    }

    expected += difference;
  }

  return expected;
}
