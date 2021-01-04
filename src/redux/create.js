import { applyMiddleware, createStore } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// history는 react router dom을 설치하면 자동으로 사용할 수 있는 라이브러리
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

/*
새로고침할 때 createStore가 발생한다.
따라서 새로고침할 때 LocalStorage에서 토큰을 가져와
리덕스에 있는 data화 시켜주면 된다.
createStore 인자로 최초 state값을 설정해줄 수 있는데,
이  최초 값은 모든 리덕스의 state를 합친 모양과 같아야 한다.
 {books: {books: [], loading: false, error: null} },
 {auth: {token: [], loading: false, error: null} },
*/
/*
그런데, 모든 state의 초기값을 설정해줄 필요는 없다.
각각의 모듈의 리듀서에서 초기 state값을 넣어주고 있기 때문에,
필요한 모듈만 최초값을 넣어준다.
*/
const store = createStore(
  reducer,
  {
    auth: { token: localStorage.getItem('token'), loading: false, error: null },
  },
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(history), promise),
  ),
);

export default store;
