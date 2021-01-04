import BookService from '../services/BookService';
import { sleep } from '../utils';

// 전체 스테이트 구조 : {books: {books: [], loading: false, error: null}, auth: {}, ...}
// books 와 auth를 따로 만들어서 combine

// action types
export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_START = 'BOOK_START';
export const BOOK_FAIL = 'BOOK_FAIL';

// action creators
const bookSuccess = (books) => ({
  type: BOOK_SUCCESS,
  books,
});

const bookStart = () => ({
  type: BOOK_START,
});

const bookFail = (error) => ({
  type: BOOK_FAIL,
  error,
});

// thunk
export const getBooksThunk = (token) => async (dispatch, getState) => {
  try {
    dispatch(bookStart());

    await sleep(2000);

    const books = await BookService.getBooks(token);

    dispatch(bookSuccess(books));
  } catch (error) {
    console.log(error);
    dispatch(bookFail(error));
  }
};
