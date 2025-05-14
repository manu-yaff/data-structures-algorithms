function helper(n) {
  let count = 0;

  while (n > 0) {
    count += n & 1;
    n = n >> 1;
  }

  return count;
}

function countBits(n) {
  const array = new Array(n + 1).fill(null);

  for (let i = 0; i <= n; i++) {
    array[i] = helper(i);
  }

  return array;
}
