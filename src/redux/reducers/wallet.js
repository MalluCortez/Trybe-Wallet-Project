import { GET_REQUEST_CURR } from '../actions';

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
  default: return state;
  }
};

export default walletReducer;
