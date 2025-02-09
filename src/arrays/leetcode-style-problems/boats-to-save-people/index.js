/**
 * Boats to save people
 * Link: https://leetcode.com/problems/boats-to-save-people/
 */
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);

  let right = people.length - 1;
  let left = 0;
  let boats = 0;

  while (left <= right) {
    let remainingWeight = limit - people[right];

    boats++;
    right--;

    if (left <= right && people[left] <= remainingWeight) {
      left++;
    }
  }

  return boats;
}
