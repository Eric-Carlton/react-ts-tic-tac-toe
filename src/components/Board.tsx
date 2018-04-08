import * as React from 'react';

import { Square } from './Square';

import { BoardProps } from '../types';

export class Board extends React.Component<BoardProps, object> {
  renderSquare(i: number) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  }

  renderSquaresForRow(row: number) {
    const boardRow = [];

    for (let column = 0; column < this.props.cols; column++) {
      boardRow.push(this.renderSquare(column + row * this.props.cols));
    }

    return boardRow;
  }

  render() {
    const boardRows = [];

    for (let row = 0; row < this.props.rows; row++) {
      boardRows.push(
        <div className="board-row" key={row}>
          {this.renderSquaresForRow(row)}
        </div>
      );
    }

    return boardRows;
  }
}
