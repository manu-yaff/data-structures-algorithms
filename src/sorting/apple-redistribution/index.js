/**
 * Apple Redistribution into Boxes
 *
 * You are given an array apple of size n and an array capacity of size m.
 * There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.
 * Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.
 * Note that, apples from the same pack can be distributed into different boxe
 *
 * Input: apple = [1,3,2], capacity = [4,3,1,5,2]
 * Output: 2
 *
 */

// Time complexity O(n log n)
// Space complexity O(n), cause of the sorting
function distributeApples(apples, boxCapacities) {
  let totalApples = apples.reduce((acc, curr) => acc + curr, 0);
  boxCapacities.sort((a, b) => b - a);

  for (let i = 0; i < boxCapacities.length; i++) {
    totalApples -= boxCapacities[i];
    if (totalApples <= 0) {
      return i + 1;
    }
  }

  // if after the iteration we have apples that did not fit in the boxes, then
  // we need all the boxes
  return boxCapacities.length;
}

module.exports = distributeApples;
