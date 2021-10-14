import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { theme } from "../utils/style";

export interface ThemeState {
  name: string;
  text: string;
  bg: string;
  canvasfill: string;
}

const initialState: ThemeState = theme[0];

export const themeSlice = createSlice({
  name: "gridInfo",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const { name, text, bg, canvasfill } = action.payload;
      state.bg = bg;
      state.name = name;
      state.text = text;
      state.canvasfill = canvasfill;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
