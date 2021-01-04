import { applyMiddleware, createStore } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// history는 react router dom을 설치하면 자동으로 사용할 수 있는 라이브러리
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(history), promise),
  ),
);

export default store;
