import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMovie, IMoviesSliceInitialState } from "../types";

const initialState: IMoviesSliceInitialState = {
  movies: [],
  featured: {
    Id: "",
    Title: "",
    CoverImage: "",
    TitleImage: "",
    Date: "",
    ReleaseYear: "",
    MpaRating: "",
    Category: "",
    Duration: "",
    VideoUrl: "",
    Description: "",
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, { payload }: PayloadAction<IMovie[]>) => {
      state.movies = payload;
    },
    setFeatured: (state, { payload }: PayloadAction<IMovie>) => {
      state.featured = payload;
    },
  },
});

export const { setMovies, setFeatured } = moviesSlice.actions;
