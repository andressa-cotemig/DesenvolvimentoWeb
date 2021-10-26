//Na nossa pasta infra crie uma pasta chamada reducers.
//Dentro dela, crie um arquivo index.js com o conteúdo:

import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';
const initialState = {
  newValue: ''
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};