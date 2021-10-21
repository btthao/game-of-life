import { numCols, numRows } from "./constants";

export const generateInitialGrid = () => {
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    grid.push(new Array(numCols).fill(0));
  }
  return grid;
};

export const generateRandomGrid = () => {
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let k = 0; k < numCols; k++) {
      row.push(Math.random() > 0.7 ? 1 : 0);
    }
    grid.push(row);
  }
  return grid;
};

export const isValidCell = (y: number, x: number, squareSize: number) => {
  const r = Math.floor(y / squareSize);
  const c = Math.floor(x / squareSize);
  if (r >= 0 && r < numRows && c >= 0 && c < numCols) {
    return { r, c };
  }
  return null;
};
