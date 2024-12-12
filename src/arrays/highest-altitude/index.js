/**
 * Find the Highest Altitude
 * 
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
 * The biker starts his trip on point 0 with altitude equal 0.
 * You are given an integer array gain of length n where gain[i] is the net gain
 * in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

 * Input: gain = [-5,1,5,0,-7]
 * Output: 1
 * 
 */

// Time Complexity O(n)
// Space Complexity O(1)
function largestAltitude(gain) {
  let highest = 0;
  let current_altitude = 0;

  for (const net_gain of gain) {
    current_altitude += net_gain;
    highest = Math.max(current_altitude, highest);
  }

  return highest;
}

module.exports = largestAltitude;
