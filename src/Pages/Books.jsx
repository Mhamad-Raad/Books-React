import React from 'react';
import Booklist from '../components/BookList';
import AddBookForm from '../components/AddBookForm';
import css from './Books.module.css';

function BooksView() {
  // return booklist and addbookform
  return (
    <div className={css.books_body}>
      <Booklist />
      <AddBookForm />
    </div>
  );
}

export default BooksView;
