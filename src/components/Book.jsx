import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../Redux/Books/Books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBooks(id));
  };
  return (
    <>
      <span>
        {title}
        {' '}
        by
        {' '}
        {author}
      </span>
      <button type="button" onClick={handleRemoveBook}>Remove</button>
    </>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
