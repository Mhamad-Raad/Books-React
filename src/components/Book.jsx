import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks, deleteBookAPI } from '../Redux/Books/Books';
import css from './Book.module.css';

function Book(
  {
    title,
    author,
    id,
    category,
  },
) {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBookAPI(id)).then(
      dispatch(deleteBooks(id)),
    );
  };
  return (
    <div className={css.card}>
      <span>
        <p className={css.category}>{ category }</p>
        <h3 className={css.title}>{title}</h3>
        <p className={css.author}>{author}</p>
        <div className={css.buttons}>
          <button type="button" onClick={handleRemoveBook} className={css.edits}>Remove</button>
        </div>
      </span>
    </div>
  );
}

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
