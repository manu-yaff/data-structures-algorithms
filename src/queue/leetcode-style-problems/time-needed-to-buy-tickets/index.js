/**
 * Time Needed to Buy Tickets
 *
 * link: https://leetcode.com/problems/time-needed-to-buy-tickets/description/
 *
 */

// Time complexity O(n * m), assuming the queue is an actual queue and not an array, and m
// is the length of the tickets array
// Space complexity O(n)
function timeRequiredToBuy(tickets, k) {
  const queue = [];

  let totalSeconds = 0;

  for (const index in tickets) {
    queue.push(Number(index));
  }

  while (queue.length > 0) {
    totalSeconds++;

    const front = queue.shift();

    if (tickets[front] > 0) {
      tickets[front]--;
    }

    if (front === k && tickets[front] === 0) {
      return totalSeconds;
    }

    if (front === k && tickets[front] > 0) {
      queue.push(front);
    }

    if (front !== k && tickets[front] > 0) {
      queue.push(front);
    }
  }
}

module.exports = timeRequiredToBuy;
