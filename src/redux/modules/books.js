import BookService from '../../services/BookService';
import { sleep } from '../../utils';

// namespace
const namespace = 'fds17-my-books/books';

// action types
export const BOOK_SUCCESS = namespace + 'BOOK_SUCCESS';
export const BOOK_START = namespace + 'BOOK_START';
export const BOOK_FAIL = namespace + 'BOOK_FAIL';

// initail state
const initialState = { books: [], loading: false, error: null };

// reducer
export default function books(prevState = initialState, action) {
  switch (action.type) {
    case BOOK_SUCCESS:
      return { books: action.books, loading: false, error: null };
    case BOOK_START:
      return { ...prevState, loading: true, error: null };
    case BOOK_FAIL:
      return { ...prevState, loading: false, error: action.error };
    default:
      return prevState;
  }
}

// action creator
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
export const getBooksThunk = () => async (dispatch, getState) => {
  try {
    dispatch(bookStart());

    await sleep(2000);

    const token = getState().auth.token;

    const books = await BookService.getBooks(token);

    dispatch(bookSuccess(books));
  } catch (error) {
    console.log(error);
    dispatch(bookFail(error));
  }
};

// redux promise middleware
export const BOOKS = 'BOOKS';

export const getBooksPromise = (token) => ({
  // 액션 객체
  type: BOOKS,
  payload: BookService.getBooks(token),
});
