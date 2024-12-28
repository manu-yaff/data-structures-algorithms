/**
 * Number of Recent Calls
 *
 * Link: https://leetcode.com/problems/number-of-recent-calls/description/
 *
 */

var RecentCounter = function () {
  this.requestsQueue = [];
};

RecentCounter.prototype.ping = function (t) {
  this.requestsQueue.push(t);

  const minBoundary = t - 3000;

  while (this.requestsQueue[0] < minBoundary) {
    this.requestsQueue.shift();
  }

  return this.requestsQueue.length;
};

module.exports = RecentCounter;
