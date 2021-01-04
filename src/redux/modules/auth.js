import axios from 'axios';
import AuthService from '../../services/AuthService';
import { sleep } from '../../utils';

// namespace
const namespace = 'fds17-my-books/auth';

// action types
export const START = namespace + '/START';
export const SUCCESS = namespace + '/SUCCESS';
export const FAIL = namespace + '/FAIL';

// initail state
const initialState = { token: null, loading: false, error: null };

// reducer
export default function auth(prevState = initialState, action) {
  switch (action.type) {
    case START:
      return { token: null, loading: true, error: null };
    case SUCCESS:
      return { token: action.token, loading: false, error: null };
    case FAIL:
      return { token: null, loading: false, error: action.error };
    default:
      return prevState;
  }
}

// action creator
export const signinStart = () => ({ type: START });
export const signinSuccess = (token) => ({ type: SUCCESS, token });
export const signinFail = (error) => ({ type: FAIL, error });

// thunk
export const singinThunk = (email, password) => async (
  dispatch,
  getState,
  history,
) => {
  try {
    dispatch(signinStart());
    const token = await AuthService(email, password);

    await sleep(1000);

    localStorage.setItem('token', token);

    dispatch(signinSuccess(token));

    // 페이지 이동
    history.push('/');
  } catch (error) {
    console.log(error);
    dispatch(signinFail(error));
  }
};
