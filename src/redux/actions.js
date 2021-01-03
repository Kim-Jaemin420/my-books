// 전체 스테이트 구조 : {books: {books: [], loading: false, error: null}, auth: {}, ...}
// books 와 auth를 따로 만들어서 combine

// action types
export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_START = 'BOOK_START';
export const BOOK_FAIL = 'BOOK_FAIL';

// action creators
export const bookSuccess = (books) => ({
  type: BOOK_SUCCESS,
  books,
});

export const bookStart = () => ({
  type: BOOK_START,
});

export const bookFail = (error) => ({
  type: BOOK_FAIL,
  error,
});
