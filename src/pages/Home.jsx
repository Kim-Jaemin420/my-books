import withToken from '../hocs/withToken';
import { Redirect } from 'react-router-dom';
import BookListContainer from '../containers/BookListContainer';

function Home({ token }) {

  if (token === null) <Redirect to="/signin" />;

  return (
    <div>
      <BookListContainer token={token} />
    </div>
  );
};

export default withToken(Home);