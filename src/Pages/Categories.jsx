import React from 'react';
import { useDispatch } from 'react-redux';
import { checkCategories } from '../Redux/Categories/Categories';

function Categories() {
  const dispatch = useDispatch();
  const checkCategoriesHandler = () => {
    dispatch(checkCategories('bookstore/categories/CHECK'));
  };
  return <button type="button" onClick={checkCategoriesHandler}>Check Status</button>;
}

export default Categories;
