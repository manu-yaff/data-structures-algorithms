/**
 * Design PDF viewer
 * Link: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */
function designerPdfViewer(h, word) {
  const width = word.length;
  const lettersHeights = getLettersHeights(word, h);
  const maxHeight = getMaxHeight(lettersHeights);

  return width * maxHeight;
}

function getCharHeight(char, h) {
  const indexAtH = char.charCodeAt(0) - 97;

  return h[indexAtH];
}

function getLettersHeights(word, h) {
  return word.split('').map((c) => getCharHeight(c, h));
}

function getMaxHeight(heights) {
  return Math.max(...heights);
}
