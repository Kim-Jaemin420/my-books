import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-dev-tools";
import reducer from './reducer';
import thunk from "redux-thunk";


const store = createStore(reducer, composeWithDevTools(thunk));


export default store;