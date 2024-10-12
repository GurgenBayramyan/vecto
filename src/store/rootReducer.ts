import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/movesSlice/moviesSlice";
import { effectSlice } from "./slices/effectSlice/effectSlice";

export const rootReducer = combineReducers({
  [moviesSlice.name]: moviesSlice.reducer,
  [effectSlice.name]: effectSlice.reducer,
});
