/**
 * Flood Fill
 * Link: https://leetcode.com/problems/flood-fill/description/
 */
function floodFill(image, sr, sc, color) {
  const initialColor = image[sr][sc];

  if (initialColor === color) return image;

  fillAdjacent(image, sr, sc, initialColor, color);

  return image;
}

function fillAdjacent(image, sr, sc, initialColor, color) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
    return;
  }

  if (image[sr][sc] !== initialColor) {
    return;
  } else {
    image[sr][sc] = color;

    fillAdjacent(image, sr + 1, sc, initialColor, color);
    fillAdjacent(image, sr - 1, sc, initialColor, color);
    fillAdjacent(image, sr, sc + 1, initialColor, color);
    fillAdjacent(image, sr, sc - 1, initialColor, color);
  }
}
