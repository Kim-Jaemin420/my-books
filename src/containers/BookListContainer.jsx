import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { bookSuccess } from '../redux/actions';

const BookListContainer = ({token}) => {
  // redux와의 연결고리
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  // api로 받은 books response data를 리덕스에게 dispatch
  const dispatch = useDispatch();
  
  const setBooks = useCallback(books => {
    dispatch(bookSuccess(books))},
    [dispatch]);

  return <BookList token={token} books={books} loading={loading} error={error} setBooks={setBooks}/>;
};

export default BookListContainer;