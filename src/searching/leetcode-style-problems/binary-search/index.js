function search(nums, target) {
  function binarySearch(left, right) {
    if (left > right) {
      return -1;
    }

    const mid = Math.floor(right + left / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      return binarySearch(left, mid - 1);
    } else {
      return binarySearch(mid + 1, right);
    }
  }

  return binarySearch(0, nums.length - 1);
}

module.exports = search;
