import Signin from '../components/Signin';
import { Redirect } from 'react-router-dom';
import withToken from '../hocs/withToken';

function SigninPage(props) {
  // path => 데이터 바꿔서 무언가 처리할 때 여기서
  // auth 인증 처리 같은것 여기서
  console.log(props); // {unrelated, token}

  const { token } = props;

  if (token !== null) {
    return <Redirect to="/" />
  }

  return (<Signin />);
};

export default withToken(SigninPage);