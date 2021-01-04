import { Router, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// pages
import Error from './pages/Error';
import Signin from './pages/Signin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// redux
import { Provider } from 'react-redux';
import store, { history } from './redux/create';

/* 
createBrowserHistory를 사용하면 생기는 문제
BrowserRouter는 우리가 create한 history를 사용하지 않고
자체적으로 history를 생성해서 그것을 사용한다.
따라서 BrowserRouter 대신 Router를 사용하고 우리가 만든
history를 props로 넘겨준다.(Router에는 history가 없기 때문에 직접 주어야 한다.)
*/
function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
