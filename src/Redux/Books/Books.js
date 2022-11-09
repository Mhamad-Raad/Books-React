import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'Art of War',
      category: 'History',
    },
    {
      id: 2,
      title: 'The Alchemist',
      category: 'Learning',
    },
    {
      id: 3,
      title: 'The Hunger Games',
      category: 'Action',
    },
  ],
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
