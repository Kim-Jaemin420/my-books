import React from 'react';
import { useSelector } from 'react-redux';
import BookList from '../components/BookList';

const BookListContainer = ({token}) => {
  // redux와의 연결고리
  const books = useSelector(state => state.books.books);

  return <BookList token={token} books={books}/>;
};

export default BookListContainer;