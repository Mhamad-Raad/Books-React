import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import css from './BookList.module.css';

function Booklist() {
  const books = useSelector((state) => state.books.books);
  return (
    <ul className={css.booksList}>
      {books?.map((book) => (
        <li key={book.item_id}>
          <Book
            title={book.title}
            author={book.author}
            id={book.item_id}
            category={book.category}
          />
        </li>
      ))}
    </ul>
  );
}

export default Booklist;
