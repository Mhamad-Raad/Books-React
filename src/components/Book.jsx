import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBooks, deleteBookAPI } from '../Redux/Books/Books';
import css from './Book.module.css';
import 'react-circular-progressbar/dist/styles.css';

function Book(
  {
    title,
    author,
    id,
    category,
  },
) {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  const handleRemoveBook = () => {
    dispatch(deleteBookAPI(id)).then(
      dispatch(deleteBooks(id)),
    );
  };

  const handleProgress = () => {
    setProgress((prevS) => prevS + 1);
  };

  return (
    <div className={css.card}>
      <span>
        <p className={css.category}>{ category }</p>
        <h3 className={css.title}>{title}</h3>
        <p className={css.author}>{author}</p>
        <div className={css.buttons}>
          <button type="button" className={css.edits}>Comments</button>
          <div className={css.vLine} />
          <button type="button" onClick={handleRemoveBook} className={css.edits}>Remove</button>
          <div className={css.vLine} />
          <button type="button" className={css.edits}>Edits</button>
        </div>
      </span>
      <div>
        <span className={css.progressSection}>
          <CircularProgressbar
            className={css.progressBar}
            value={progress}
          />
          <div className={css.percentage}>
            <p className={css.percentageNumber}>
              {progress}
              %
            </p>
            <p>Completed</p>
          </div>
          <div className={css.VlingeR} />
          <div className={css.updateProgress}>
            <h3>Current Chapter</h3>
            <p>Chapter 17</p>
            <button
              type="button"
              className={css.updateProgressBTN}
              onClick={handleProgress}
            >
              Update Progress
            </button>
          </div>
        </span>
      </div>
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
