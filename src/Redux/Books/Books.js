import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, action) {
      if (action.payload) {
        state.books.unshift(action.payload);
      }
    },
    deleteBooks(state, action) {
      if (action.payload) {
        const temp = state.books.filter((book) => book.id !== action.payload);
        state.books = temp;
      }
    },
  },
});

export const { addBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
