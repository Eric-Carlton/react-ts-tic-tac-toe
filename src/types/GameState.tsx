import { Player } from './Player';
import { SortOrder } from './SortOrder';

interface GameHistory {
  squares: Array<Player>;
  squareChangedCol?: number;
  squareChangedRow?: number;
}

export interface GameState {
  history: Array<GameHistory>;
  stepNumber: number;
  xIsNext: boolean;
  sortOrder: SortOrder;
}
