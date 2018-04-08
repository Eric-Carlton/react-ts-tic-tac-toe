export function arrayRange(start: number, length: number, step: number = 1) {
  const arr = new Array();

  for (let i = 0; i < length; i++) {
    arr.push(i * step + start);
  }

  return arr;
}
