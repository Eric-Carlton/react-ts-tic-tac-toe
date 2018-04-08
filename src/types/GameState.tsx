import { Player } from './Player';
import { SortOrder } from './SortOrder';

interface GameHistory {
  squares: Player[];
  squareChangedCol?: number;
  squareChangedRow?: number;
}

export interface GameState {
  history: GameHistory[];
  stepNumber: number;
  xIsNext: boolean;
  sortOrder: SortOrder;
}
