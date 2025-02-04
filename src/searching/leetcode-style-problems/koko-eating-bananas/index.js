/**
 * Koko Eating Bananas
 * Link: https://leetcode.com/problems/koko-eating-bananas/description/
 */
function minEatingSpeed(piles, h) {
  let left = 0;
  let right = 1_000_000_000;
  let ans = -1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (canFinish(piles, h, mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

function canFinish(piles, h, k) {
  let hoursConsumed = 0;

  for (const pile of piles) {
    hoursConsumed += Math.ceil(pile / k);
  }

  return hoursConsumed <= h;
}
