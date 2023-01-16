export const USER_LOGIN = 'USER_LOGIN';
export const GET_REQUEST_CURR = 'GET_REQUEST_CURR';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const EXPENCIE_DEL = 'EXPENCIE_DEL';
export const EDIT = 'EDIT';
export const SAVE_INFO = 'SAVE_INFO';

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

export const expencieDel = (id) => ({
  type: EXPENCIE_DEL,
  payload: id,
});

export const edit = (id) => ({
  type: EDIT,
  payload: id,
});

export const saveInfo = (exp) => ({
  type: SAVE_INFO,
  payload: exp,
});

export const getAPItotal = (expencie) => async (dispatch) => {
  const urlAPI = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(urlAPI);
  const json = await response.json();
  delete json.USDT;
  dispatch(saveExpenses({ ...expencie, exchangeRates: json }));
};
