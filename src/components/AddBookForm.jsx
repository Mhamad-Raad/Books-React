import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postBook, addBooks } from '../Redux/Books/Books';
// import { postBook } from '../Redux/Books/Books';
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
    <form onSubmit={submitHandler}>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" value={title} onChange={titleStateHandler} required />
      </label>

      <label htmlFor="author">
        Author
        <input type="text" name="author" id="author" value={author} onChange={authorStateHandler} required />
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
