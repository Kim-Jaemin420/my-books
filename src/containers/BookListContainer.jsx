import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { getBooksThunk } from '../redux/modules/books';

const BookListContainer = () => {
  // redux와의 연결고리
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  // api로 받은 books response data를 리덕스에게 dispatch
  const dispatch = useDispatch();

  const getBooks = useCallback(async () => {
      dispatch(getBooksThunk());
      // dispatch(getBooksPromise(token));
    }, [dispatch, ])

  return (
    <BookList 
    books={books} 
    loading={loading} 
    error={error} 
    getBooks={getBooks}
    />
  );
};

export default BookListContainer;