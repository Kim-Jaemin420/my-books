import withToken from '../hocs/withToken';
import { Redirect } from 'react-router-dom';
import BookList from '../components/BookList';

function Home({ token }) {

  if (token === null) {
    <Redirect to="/signin" />;
  }

  return (
    <div>
      <BookList token={token} />
    </div>
  );
};

export default withToken(Home);