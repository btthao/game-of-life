import { configureStore } from "@reduxjs/toolkit";
import gridPosReducer from "../features/gridPosSlice";
import gridInfoReducer from "../features/gridInfoSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    gridPos: gridPosReducer,
    gridInfo: gridInfoReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
