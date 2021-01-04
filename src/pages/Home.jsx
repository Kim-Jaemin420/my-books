import { Redirect } from 'react-router-dom';
import BookListContainer from '../containers/BookListContainer';
import { useSelector } from 'react-redux';

function Home() {
  const token = useSelector(state => state.auth.token)
  
  if (token === null) { 
    return <Redirect to="/signin" />;
  }

  return (
    <div>
      <BookListContainer />
    </div>
  );
};

export default Home;