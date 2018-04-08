import * as React from 'react';

import { Board } from './Board';

import * as utils from '../utils';

import { Player, GameProps, GameState, SortOrder } from '../types';

export class Game extends React.Component<GameProps, object> {
  state: GameState;
  winningLines: number[][] = [];

  constructor(props: GameProps) {
    super(props);
    this.initState();
    this.winningLines = utils.initWinningLines(props.cols, props.rows);
  }

  initState() {
    this.state = {
      history: [
        {
          squares: Array(this.props.rows * this.props.cols).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      sortOrder: SortOrder.ASCENDING
    };
  }

  handleClick(i: number) {
    const history = this.state.history,
      current = history[history.length - 1],
      squares = current.squares.slice(),
      winner = utils.calculateWinner(squares, this.winningLines);

    if (winner || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? Player.X : Player.O;

    this.setState({
      history: history.concat([
        {
          squares: squares,
          squareChangedCol: i % this.props.cols,
          squareChangedRow: Math.floor(i / this.props.rows)
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  renderMoveHistory() {
    return this.state.history.map((step, move) => {
      return (
        <li key={move}>
          <button
            className={this.state.stepNumber === move ? 'bold' : ' '}
            onClick={() => this.jumpTo(move)}
          >
            {move
              ? `Go to move #${move} (${step.squareChangedCol}, ${
                  step.squareChangedRow
                })`
              : 'Go to game start'}
          </button>
        </li>
      );
    });
  }

  determineStatus() {
    const winner = utils.calculateWinner(
      this.state.history[this.state.stepNumber].squares,
      this.winningLines
    );

    if (winner) {
      utils.highlightSquares(winner.winningLines);
      return `Winner: ${winner.winningPlayer}`;
    } else if (this.state.history.length > this.props.cols * this.props.rows) {
      return 'Draw';
    } else {
      return `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
  }

  render() {
    const current = this.state.history[this.state.stepNumber],
      status = this.determineStatus(),
      moves =
        this.state.sortOrder === SortOrder.DESCENDING
          ? this.renderMoveHistory().reverse()
          : this.renderMoveHistory();

    return (
      <div className="game">
        <div className="game-board">
          <p>{status}</p>
          <Board
            cols={this.props.cols}
            rows={this.props.rows}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <h1>Moves History ({this.state.sortOrder})</h1>
          <button
            onClick={() => {
              this.setState({
                history: this.state.history,
                stepNumber: this.state.stepNumber,
                xIsNext: this.state.xIsNext,
                sortOrder:
                  this.state.sortOrder === SortOrder.ASCENDING
                    ? SortOrder.DESCENDING
                    : SortOrder.ASCENDING
              });
            }}
          >
            Sort
            {` ${
              this.state.sortOrder === SortOrder.ASCENDING
                ? SortOrder.DESCENDING
                : SortOrder.ASCENDING
            }`}
          </button>
          <ol reversed={this.state.sortOrder === SortOrder.DESCENDING}>
            {moves}
          </ol>
        </div>
      </div>
    );
  }
}
