import { createSlice } from "@reduxjs/toolkit";

const books = createSlice({
  name: "books",
  initialState: {
    currentBook: null,
  },
  reducers: {
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
  },
});

export const { setCurrentBook } = books.actions;
export default books.reducer;
