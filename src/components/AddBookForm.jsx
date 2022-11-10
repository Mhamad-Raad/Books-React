import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook, addBooks } from '../Redux/Books/Books';
import css from './AddBookForm.module.css';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const item_id = Math.floor(Math.random() * 1000).toString();
    const book = {
      item_id,
      title,
      author,
      category: 'Action',
    };
    dispatch(postBook(book)).then(
      () => dispatch(addBooks(book)),
    );
    setTitle('');
    setAuthor('');
  };

  const authorStateHandler = (event) => {
    setAuthor(event.target.value);
  };
  const titleStateHandler = (event) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <div className={css.Line} />
      <h2 className={css.form_header}>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          className={css.title_input}
          onChange={titleStateHandler}
          required
        />
        <select
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={authorStateHandler}
          className={css.category_input}
          required
        >
          <option value="actual value 1">Display Text 1</option>
          <option value="actual value 2">Display Text 2</option>
          <option value="actual value 3">Display Text 3</option>
        </select>
        <button type="submit" className={css.formBTN}>Add Book</button>
      </form>
    </>
  );
}

export default AddBookForm;
