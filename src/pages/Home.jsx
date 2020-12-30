import withToken from '../hocs/withToken';
import { Redirect } from 'react-router-dom';
import BookListContainer from '../containers/BookListContainer';

function Home({ token }) {

  if (token === null) <Redirect to="/signin" />;

  return (<BookListContainer token={token} />);
};

export default withToken(Home);