import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook, addBooks } from '../Redux/Books/Books';
import css from './AddBookForm.module.css';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const item_id = Math.floor(Math.random() * 1000).toString();
    const book = {
      item_id,
      title,
      author,
      category,
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
  const categoryStateHandler = (event) => {
    setCategory(event.target.value);
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
          placeholder="Book title"
          value={title}
          className={css.title_author_input}
          onChange={titleStateHandler}
          required
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          value={author}
          className={css.title_author_input}
          onChange={authorStateHandler}
          required
        />
        <select
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={categoryStateHandler}
          className={css.category_input}
          required
        >
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Drama">Drama</option>
        </select>
        <button type="submit" className={css.formBTN}>Add Book</button>
      </form>
    </>
  );
}

export default AddBookForm;
