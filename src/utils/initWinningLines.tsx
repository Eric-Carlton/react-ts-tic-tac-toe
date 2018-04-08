import { arrayRange } from './arrayRange';

export function initWinningLines(cols: number, rows: number) {
  const winningLines: number[][] = [];

  // add all winning horizontal lines
  for (let row = 0; row < rows; row++) {
    winningLines.push(arrayRange(row * cols, cols));
  }

  // add all winning vertical lines
  for (let col = 0; col < cols; col++) {
    winningLines.push(arrayRange(col, rows, cols));
  }

  // add winning diagonal lines, if they exist
  if (rows === cols) {
    winningLines.push(arrayRange(0, rows, rows + 1));
    winningLines.push(arrayRange(rows - 1, rows, rows - 1));
  }

  return winningLines;
}
