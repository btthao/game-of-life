import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../app/store";
import { neighborsPos, numCols, numRows } from "../utils/constants";
import { generateInitialGrid } from "../utils/grid";

export interface GridInfoState {
  grid: number[][];
  population: number;
  numGenerations: number;
  speed: number;
}

const initialState: GridInfoState = {
  grid: generateInitialGrid(),
  population: 0,
  numGenerations: 0,
  speed: 1,
};

export const gridInfoSlice = createSlice({
  name: "gridInfo",
  initialState,
  reducers: {
    automation: (state) => {
      state.grid = produce(state.grid, (gridCopy) => {
        for (let r = 0; r < numRows; r++) {
          for (let c = 0; c < numCols; c++) {
            let neighbors = 0;

            for (const pos of neighborsPos) {
              const [x, y] = pos;
              const neighborR = r + x;
              const neighborC = c + y;
              if (
                neighborR >= 0 &&
                neighborR < numRows &&
                neighborC >= 0 &&
                neighborC < numCols
              ) {
                neighbors += state.grid[neighborR][neighborC];
              }
            }

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[r][c] = 0;
            } else if (state.grid[r][c] === 0 && neighbors === 3) {
              gridCopy[r][c] = 1;
            }
          }
        }
      });
      state.numGenerations += 1;
      gridInfoSlice.caseReducers.countLives(state);
    },
    countLives: (state) => {
      let count = 0;
      for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
          if (state.grid[r][c] === 1) {
            count += 1;
          }
        }
      }
      state.population = count;
    },
    createLives: (state, action) => {
      const { r, c } = action.payload;
      state.grid = produce(state.grid, (gridCopy) => {
        gridCopy[r][c] = 1;
      });
      gridInfoSlice.caseReducers.countLives(state);
    },
    killCells: (state, action) => {
      const { r, c } = action.payload;
      state.grid = produce(state.grid, (gridCopy) => {
        gridCopy[r][c] = 0;
      });
      gridInfoSlice.caseReducers.countLives(state);
    },

    clear: (state) => {
      state.grid = generateInitialGrid();
      state.population = 0;
      state.numGenerations = 0;
    },
  },
});

export const { createLives, killCells, automation, clear } =
  gridInfoSlice.actions;

export const selectGridInfo = (state: RootState) => state.gridInfo;

export default gridInfoSlice.reducer;
