const Stack = require('../../implementation/array/index');

/**
 * Converts decimal number to the specify base, max base is 16
 *
 * @param {number} decimal - Number to be converted to binary, greater than 0
 * @param {number} base - Base used to convert the number to
 * @returns {string} - Number converted to the given base
 */
function baseConverter(decimal, base) {
  const digits = '0123456789ABCDEF';
  const reminderStack = new Stack();

  while (decimal !== 0) {
    const reminder = decimal % base;

    reminderStack.push(reminder);

    decimal = Math.floor(decimal / base);
  }

  let newNumber = '';

  while (!reminderStack.isEmpty()) {
    newNumber += digits[reminderStack.pop()];
  }

  return newNumber;
}

module.exports = baseConverter;
