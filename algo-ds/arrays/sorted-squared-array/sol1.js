// Time: O(nlogn), Space: O(n)
function sortedSquaredArray(array) {
  // Write your code here.
	array = array.map((item) => { return item * item });
	array.sort((a,b) => { return a - b })
  return array;
}


