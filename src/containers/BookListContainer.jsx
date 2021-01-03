import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import axios from "axios";
import { sleep } from '../utils';
import { bookFail, bookStart, bookSuccess } from '../redux/actions';

const BookListContainer = ({token}) => {
  // redux와의 연결고리
  const books = useSelector(state => state.books.books);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  // api로 받은 books response data를 리덕스에게 dispatch
  const dispatch = useDispatch();

      const getBooks = useCallback(async () => {
        try {
          dispatch(bookStart());
    
          await sleep(2000);
    
          const response = await axios.get('https://api.marktube.tv/v1/book', {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });
    
          dispatch(bookSuccess(response.data));
    
        } catch (error) {
          console.log(error);
          dispatch(bookFail(error));
        }
      }, [dispatch, token])

  return (
    <BookList 
    token={token} 
    books={books} 
    loading={loading} 
    error={error} 
    getBooks={getBooks}
    />
  );
};

export default BookListContainer;