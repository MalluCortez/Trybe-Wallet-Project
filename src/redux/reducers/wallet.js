import { GET_REQUEST_CURR, SAVE_EXPENSES,
  EXPENCIE_DEL, EDIT, SAVE_INFO } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_REQUEST_CURR: return {
    ...state,
    currencies: action.payload,
  };
  case SAVE_EXPENSES: return {
    ...state,
    expenses: [...state.expenses, action.payload],
  };
  case EXPENCIE_DEL: return {
    ...state,
    expenses: action.payload,
  };
  case EDIT: return {
    ...state,
    editor: true,
    idToEdit: action.payload,
  };
  case SAVE_INFO: return {
    ...state,
    expenses: state.expenses.map((element) => (element.id === Number(state.idToEdit)
      ? ({ id: element.id, ...action.payload, exchangeRates: element.exchangeRates })
      : element)),
    editor: false,
  };
  default: return state;
  }
};

export default walletReducer;
