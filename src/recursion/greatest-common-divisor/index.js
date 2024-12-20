// Time complexity O(log(min(a,b)))
// Space complexity O(log(min(a,b)))

function calculateGCD(a, b) {
  if (a % b === 0) {
    return b;
  }

  const min = Math.min(a, b);
  const max = min === a ? b : a;

  return calculateGCD(min, max % min);
}

// second approach
function calculateGCD(a, b) {
  if (b === 0) {
    return a;
  }

  return calculateGCD(b, a % b);
}
