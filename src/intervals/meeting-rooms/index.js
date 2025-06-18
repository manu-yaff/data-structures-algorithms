/**
 * Meeting Rooms
 * Link: https://leetcode.com/problems/meeting-rooms/description/
 */
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) return false;

    prev = intervals[i];
  }

  return true;
}
