/**
 * 271. Encode and Decode Strings
 * Link: https://leetcode.com/problems/encode-and-decode-strings/description/
 */

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
function encode(strs) {
  return strs.map((x) => x.length + '?' + x).join('');
}

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
function decode(s) {
  const result = [];

  let index = 0;

  while (index < s.length) {
    const delimeter = s.indexOf('?', index);

    const size = parseInt(s.slice(index, delimeter));

    const word = s.slice(delimeter + 1, delimeter + 1 + size);

    result.push(word);

    index = delimeter + 1 + size;
  }

  return result;
}
