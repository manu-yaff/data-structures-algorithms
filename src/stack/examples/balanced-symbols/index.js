const Stack = require('../../implementation/array/index');

function symbolsMatch(closingSymbol, openingSymbol) {
  const matching = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  return matching[closingSymbol] === openingSymbol;
}

/**
 * Checks if symbol string is balanced
 * @param {string} symbolString
 * @returns {boolean} whether the string is balanced or not
 */
function parChecker(symbolString) {
  const stack = new Stack();

  for (const symbol of symbolString) {
    const stackIsEmpty = stack.isEmpty();
    const isOpeningSymbol = '({['.includes(symbol);

    if (isOpeningSymbol) {
      stack.push(symbol);
    } else {
      // is closing symbol
      if (stackIsEmpty) {
        return false;
      } else {
        if (!symbolsMatch(symbol, stack.peek())) {
          return false;
        } else {
          stack.pop();
        }
      }
    }
  }

  return stack.isEmpty();
}

module.exports = parChecker;
