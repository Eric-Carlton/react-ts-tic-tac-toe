export function highlightSquares(squares: number[] = []) {
  squares.forEach(square => {
    const toHighlight = document.querySelectorAll('.square')[square];

    if (!toHighlight.classList.contains('highlight')) {
      toHighlight.classList.add('highlight');
    }
  });
}
