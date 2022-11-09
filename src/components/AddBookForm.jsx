import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../Redux/Books/Books';

function AddBookForm() {
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const id = Math.floor(Math.random() * 1000);
    const book = {
      id,
      title,
      author,
    };
    dispatch(addBooks(book));
    event.target.title.value = '';
    event.target.author.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" required />
      </label>

      <label htmlFor="author">
        Author
        <input type="text" name="author" id="author" required />
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBookForm;
