import { BOOK_SUCCESS } from './actions';

const initialState = {books: []};

// reducer
export default function books(prevState = initialState, action) {
 switch (action.type) {
   case BOOK_SUCCESS:
     // {books: [...prevState, ...action.books]}라고 안해줘도 되나?
     return {books: action.books}
   default:
     return prevState;
 }
}