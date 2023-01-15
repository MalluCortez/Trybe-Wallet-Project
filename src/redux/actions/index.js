export const USER_LOGIN = 'USER_LOGIN';
export const GET_REQUEST_CURR = 'GET_REQUEST_CURR';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

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

export const saveExpenses = (element) => ({
  type: SAVE_EXPENSES,
  payload: element,
});

export const getAPItotal = (expencie) => async (dispatch) => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(urlAPI);
  const json = await response.json();
  delete json.USDT;
  dispatch(saveExpenses({ ...expencie, exchangeRates: json }));
};
