import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  count: 0,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
