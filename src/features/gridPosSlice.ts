import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import {
  maxSquareSize,
  minSquareSize,
  numCols,
  numRows,
} from "../utils/constants";

export interface GridPosState {
  xPos: number;
  yPos: number;
  move: number;
  squareSize: number;
  containerWidth: number;
  containerHeight: number;
}

const initialState: GridPosState = {
  xPos: 0,
  yPos: 0,
  move: 80,
  squareSize: 18,
  containerWidth: 0,
  containerHeight: 0,
};

export const gridPosSlice = createSlice({
  name: "gridPos",
  initialState,
  reducers: {
    moveDown: (state) => {
      const { yPos, containerHeight, move, squareSize } = state;
      if (yPos > containerHeight - squareSize * numRows) {
        if (yPos - move > containerHeight - squareSize * numRows) {
          state.yPos -= move;
        } else {
          state.yPos = containerHeight - squareSize * numRows;
        }
      }
    },

    moveUp: (state) => {
      const { yPos, move } = state;
      if (yPos < 0) {
        if (yPos + move < 0) {
          state.yPos += move;
        } else {
          state.yPos = 0;
        }
      }
    },

    moveRight: (state) => {
      const { xPos, move, containerWidth, squareSize } = state;
      if (xPos > containerWidth - squareSize * numCols) {
        if (xPos - move > containerWidth - squareSize * numCols) {
          state.xPos -= move;
        } else {
          state.xPos = containerWidth - squareSize * numCols;
        }
      }
    },

    moveLeft: (state) => {
      const { xPos, move } = state;
      if (xPos < 0) {
        if (xPos + move < 0) {
          state.xPos += move;
        } else {
          state.xPos = 0;
        }
      }
    },

    setContainerSize: (
      state,
      action: PayloadAction<{ height: number; width: number }>
    ) => {
      state.containerHeight = action.payload.height;
      state.containerWidth = action.payload.width;
      gridPosSlice.caseReducers.adjustWhenResize(state);
    },

    adjustWhenResize: (state) => {
      const { xPos, yPos, containerHeight, containerWidth, squareSize } = state;

      if (yPos < containerHeight - squareSize * numRows) {
        state.yPos = containerHeight - squareSize * numRows;
      } else if (yPos > 0) {
        state.yPos = 0;
      }

      if (xPos < containerWidth - squareSize * numCols) {
        state.xPos = containerWidth - squareSize * numCols;
      } else if (xPos > 0) {
        state.xPos = 0;
      }
    },

    incSquareSize: (state) => {
      if (state.squareSize < maxSquareSize) {
        state.squareSize += 1;
      }
      gridPosSlice.caseReducers.adjustWhenResize(state);
    },

    decSquareSize: (state) => {
      if (state.squareSize > minSquareSize) {
        state.squareSize -= 1;
      }
      gridPosSlice.caseReducers.adjustWhenResize(state);
    },
  },
});

export const {
  moveDown,
  moveLeft,
  moveRight,
  moveUp,
  setContainerSize,
  adjustWhenResize,
  incSquareSize,
  decSquareSize,
} = gridPosSlice.actions;

export const selectGridPos = (state: RootState) => state.gridPos;

export default gridPosSlice.reducer;
