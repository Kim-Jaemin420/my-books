import { BOOK_ERROR, BOOK_START, BOOK_SUCCESS } from './actions';

const initialState = { books: [], loading: false, error: null };

// reducer
export default function books(prevState = initialState, action) {
  switch (action.type) {
    case BOOK_SUCCESS:
      // {books: [...prevState, ...action.books]}라고 안해줘도 되나?
      return { books: action.books, loading: false, error: null };
    case BOOK_START:
      return { ...prevState, loading: true, error: null };
    case BOOK_ERROR:
      return { ...prevState, loading: false, error: action.books.error };
    default:
      return prevState;
  }
}
