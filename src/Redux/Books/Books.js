import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [
  ],
};

export const getBooks = createAsyncThunk('books/getBooks', async () => fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fHatQnkfg2s6EXqIovaY/books', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => response.text()));

export const postBook = createAsyncThunk('books/addBooks', async (book) => fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fHatQnkfg2s6EXqIovaY/books', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: 'Action',
  }),
}));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, action) {
      state.books.unshift(action.payload);
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
  },
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      // console.log('fulfilled');
      let temp = action.payload;
      const arr = [];
      temp = JSON.parse(temp);
      Object.keys(temp).forEach((key) => {
        temp[key][0].item_id = key;
        arr.push(temp[key][0]);
      });
      state.books = arr;
    },
    [getBooks.pending]: () => {
      // console.log('Bet Books pending');
    },
    [getBooks.rejected]: () => {
      // console.log('Get Books rejected');
    },
    [postBook.fulfilled]: () => {
      // state.books.push(action.payload);
    },
    [postBook.pending]: () => {
      // console.log('pending');
    },
    [postBook.rejected]: () => {
      // console.log('rejected');
    },
  },
});

// export const postbook = postBook;
export const { addBooks, deleteBooks, replaceTodos } = booksSlice.actions;
export default booksSlice.reducer;
