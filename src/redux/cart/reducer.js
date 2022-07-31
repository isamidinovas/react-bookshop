import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    booksInCart: [],
  },
  reducers: {
    setBook: (state, action) => {
      state.booksInCart.push(action.payload);
    },
    removeBook: (state, action) => {
      state.booksInCart = state.booksInCart.filter(
        (book) => book.id !== action.payload
      );
    },
  },
});
export const { setBook, removeBook } = cart.actions;
export default cart.reducer;
