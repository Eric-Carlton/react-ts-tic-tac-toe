import { Player } from '../types';

export function calculateWinner(
  squares: Array<Player>,
  winningLines: Array<Array<number>>
) {
  for (let i = 0; i < winningLines.length; i++) {
    const winningLine = winningLines[i];

    let xWon = winningLine.every(val => squares[val] === Player.X),
      yWon = winningLine.every(val => squares[val] === Player.O);

    if (xWon || yWon) {
      return {
        winningPlayer: xWon ? Player.X : Player.O,
        winningLines: winningLines[i]
      };
    }
  }
  return null;
}
