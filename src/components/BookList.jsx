import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function Booklist() {
  const books = useSelector((state) => state.books.books);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Book title={book.title} author={book.author} id={book.id} />
        </li>
      ))}
    </ul>
  );
}

export default Booklist;
