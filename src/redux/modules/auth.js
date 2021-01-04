import axios from 'axios';
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
export const singinThunk = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(signinStart());
    const response = await axios.post('https://api.marktube.tv/v1/me', {
      email,
      password,
    });

    await sleep(1000);

    const token = response.data.token;
    localStorage.setItem('token', token);

    dispatch(signinSuccess(token));
  } catch (error) {
    console.log(error);
    dispatch(signinFail(error));
  }
};
