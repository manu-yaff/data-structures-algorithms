/**
 * Sorting stack
 *
 * Given a stack, sort it using only stack operations (push and pop).
 * You can use an additional temporary stack, but you may not copy the elements
 * into any other data structure (such as an array). The values in the stack are
 * to be sorted in descending order, with the largest elements on top
 *
 * Input: [34, 3, 31, 98, 92, 23]
 * Output: [3, 23, 31, 34, 92, 98]
 *
 */

// Time complexity O(n^2)
// Space complexity O(n)
function sortStack(stack) {
  const aux = [];

  while (stack.length > 0) {
    const current = stack.pop();

    while (aux.length > 0 && current < aux[aux.length - 1]) {
      stack.push(aux.pop());
    }

    aux.push(current);
  }

  return aux;
}

module.exports = sortStack;
