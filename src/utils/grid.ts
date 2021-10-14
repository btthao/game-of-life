import { numCols, numRows } from "./constants";

export const generateInitialGrid = () => {
  //   console.log("run generate intial");
  const grid = [];
  for (let i = 0; i < numRows; i++) {
    grid.push(new Array(numCols).fill(0));
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
