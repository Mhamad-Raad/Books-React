import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [
  ],
};

export const getBooks = createAsyncThunk('books/replaceTodos', async () => {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fHatQnkfg2s6EXqIovaY/books', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.text());
  return result;
});

const postBook = createAsyncThunk('books/addBooks', async (book) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fHatQnkfg2s6EXqIovaY/books', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: 'The Hunger Games',
      author: book.author,
      category: 'Action',
    }),
  }).then((response) => response)
    .then((result) => result.text());
  return response;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, action) {
      if (action.payload) {
        try {
          postBook(action.payload);
        } catch (err) {
          console.log(err);
        }
      }
    },
    deleteBooks(state, action) {
      if (action.payload) {
        const temp = state.books.filter((book) => book.item_id !== action.payload);
        state.books = temp;
      }
    },
    replaceTodos(state, action) {
      if (action.payload) {
        state.books = action.payload;
      }
    },
    extraReducers: {
      [getBooks.fulfilled]: (state, action) => {
        console.log('asd');
        return action.payload;
      },
      [getBooks.pending]: () => {
        console.log('asd');
        // return action.payload;
      },
    },
  },
});

// export const postbook = postBook;
export const { addBooks, deleteBooks, replaceTodos } = booksSlice.actions;
export default booksSlice.reducer;
