export interface BoardProps {
  onClick: (index: number) => void;
  cols: number;
  rows: number;
  squares: string[];
}
