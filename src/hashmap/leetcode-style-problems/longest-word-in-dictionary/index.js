/**
 * Longest Word in Dictionary
 * Link: https://leetcode.com/problems/longest-word-in-dictionary
 */
function longestWord(words) {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return b.localeCompare(a);
  });

  const set = new Set(words);

  set.add('');

  for (let i = words.length - 1; i > 0; i--) {
    const word = words[i];

    const all = [];
    for (let i = 0; i < word.length - 1; i++) {
      const prefix = word.slice(0, i + 1);

      if (set.has(prefix)) {
        all.push(true);
      } else {
        all.push(false);
      }
    }

    if (all.every((x) => x == true)) {
      return word;
    }
  }

  return '';
}
