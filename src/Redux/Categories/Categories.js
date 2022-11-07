import { createSlice } from '@reduxjs/toolkit';

const CHECK = 'bookstore/categories/CHECK';

const initialState = {
  categories: [],
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategories(state, action) {
      if (action.payload === CHECK) {
        window.alert('Under Construction');
      }
    },
  },
});

export const { addCategories } = categories.actions;
export default categories.reducer;
