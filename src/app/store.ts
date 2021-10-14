import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import gridPosReducer from "../features/gridPosSlice";
import gridInfoReducer from "../features/gridInfoSlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gridPos: gridPosReducer,
    gridInfo: gridInfoReducer,
    theme: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
