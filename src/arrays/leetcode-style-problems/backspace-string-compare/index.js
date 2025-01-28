/**
 * Backspace String Compare
 * Link: https://leetcode.com/problems/backspace-string-compare/description/
 */
function backspaceCompare(s, t) {
  let index1 = s.length - 1;
  let index2 = t.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    // get next available indexes
    let i1 = getNextValidCharIndex(s, index1);
    let i2 = getNextValidCharIndex(t, index2);

    // if both strings have been finished, they are equal
    if (i1 < 0 && i2 < 0) {
      return true;
    }

    // if one of them has been procress, but not both then they're not equal
    if (i1 < 0 || i2 < 0) {
      return false;
    }

    // if different char, then they're not the same
    if (s[i1] !== t[i2]) {
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }

  return true;
}

function getNextValidCharIndex(str, index) {
  // this var is used to apply the backspace when we find a non # char
  let backspaces = 0;

  while (index >= 0) {
    if (str[index] === '#') {
      backspaces += 1;
    } else if (backspaces > 0) {
      backspaces -= 1;
    } else {
      // means backspaces have been applied
      // so the current index is the next one
      break;
    }

    index -= 1;
  }

  return index;
}
