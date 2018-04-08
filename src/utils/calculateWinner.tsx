import { Player } from '../types';

export function calculateWinner(
  squares: Array<Player>,
  winningLines: Array<Array<number>>
) {
  for (let i = 0; i < winningLines.length; i++) {
    const winningLine = winningLines[i],
      xWon = winningLine.every(val => squares[val] === Player.X),
      oWon = winningLine.every(val => squares[val] === Player.O);

    if (xWon || oWon) {
      return {
        winningPlayer: xWon ? Player.X : Player.O,
        winningLines: winningLines[i]
      };
    }
  }
  return null;
}
