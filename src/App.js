import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BooksView from './Pages/Books';
import { getBooks, replaceTodos } from './Redux/Books/Books';
import Categories from './Pages/Categories';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = dispatch(getBooks());
    data.then((result) => {
      let temp = result;
      const arr = [];
      temp = JSON.parse(temp.payload);
      Object.keys(temp).forEach((key) => {
        temp[key][0].item_id = key;
        arr.push(temp[key][0]);
      });
      dispatch(replaceTodos(arr));
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<BooksView />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
