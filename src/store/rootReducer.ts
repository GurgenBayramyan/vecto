import { combineReducers } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/moviesSlice";
import { effectSlice } from "./slices/effectSlice";

export const rootReducer = combineReducers({
  [moviesSlice.name]: moviesSlice.reducer,
  [effectSlice.name]: effectSlice.reducer,
});
