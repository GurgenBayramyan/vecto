import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovie, IMoviesSliceInitialState } from "../types";

const initialState: IMoviesSliceInitialState = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, { payload }: PayloadAction<IMovie[]>) => {
      state.movies = payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
