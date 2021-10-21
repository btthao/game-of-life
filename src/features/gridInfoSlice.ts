import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../app/store";
import { neighborsPos, numCols, numRows } from "../utils/constants";
import { generateInitialGrid, generateRandomGrid } from "../utils/grid";

export interface GridInfoState {
  grid: number[][];
  population: number;
  numGenerations: number;
}

const initialState: GridInfoState = {
  grid: generateInitialGrid(),
  population: 0,
  numGenerations: 0,
};

export const gridInfoSlice = createSlice({
  name: "gridInfo",
  initialState,
  reducers: {
    automation: (state) => {
      state.grid = produce(state.grid, (newgrid) => {
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
              newgrid[r][c] = 0;
            } else if (state.grid[r][c] === 0 && neighbors === 3) {
              newgrid[r][c] = 1;
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
          count += state.grid[r][c];
        }
      }
      state.population = count;
    },

    createLives: (state, action: PayloadAction<{ r: number; c: number }>) => {
      const { r, c } = action.payload;
      if (state.grid[r][c] === 0) {
        state.grid = produce(state.grid, (newgrid) => {
          newgrid[r][c] = 1;
        });
        state.population += 1;
      }
    },

    killCells: (state, action: PayloadAction<{ r: number; c: number }>) => {
      const { r, c } = action.payload;
      if (state.grid[r][c] === 1) {
        state.grid = produce(state.grid, (newgrid) => {
          newgrid[r][c] = 0;
        });
        state.population -= 1;
      }
    },

    clear: (state) => {
      state.grid = generateInitialGrid();
      state.population = 0;
      state.numGenerations = 0;
    },

    random: (state) => {
      state.grid = generateRandomGrid();
      gridInfoSlice.caseReducers.countLives(state);
      state.numGenerations = 0;
    },
  },
});

export const { createLives, killCells, automation, clear, random } =
  gridInfoSlice.actions;

export const selectGridInfo = (state: RootState) => state.gridInfo;

export default gridInfoSlice.reducer;
