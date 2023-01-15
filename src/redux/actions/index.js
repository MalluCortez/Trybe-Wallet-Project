import fetchCurr from '../services/currAPI';

export const USER_LOGIN = 'USER_LOGIN';
export const GET_REQUEST_CURR = 'GET_REQUEST_CURR';

export const userLogin = (email) => ({
  type: USER_LOGIN,
  payload: {
    email,
  },
});

export const getRequestCurr = (curr) => ({
  type: GET_REQUEST_CURR,
  payload: curr,
});
