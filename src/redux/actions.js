// 전체 스테이트 구조 : {books: {books: []}, auth: {}, ...}
// books 와 auth를 따로 만들어서 combine

// action types
export const BOOK_SUCCESS = 'BOOK_SUCCESS';

// action creators
export const bookSuccess = (books) => ({
  type: BOOK_SUCCESS,
  books,
});