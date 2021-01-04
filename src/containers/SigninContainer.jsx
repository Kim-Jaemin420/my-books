import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Signin from '../components/Signin';
import { singinThunk } from '../redux/modules/auth';

const SigninContainer = () => {
  const dispatch = useDispatch();
  const signin = useCallback((email, password) => {
    dispatch(singinThunk(email, password));
   }, [dispatch])

  return <Signin signin={signin} />;
};

export default SigninContainer;