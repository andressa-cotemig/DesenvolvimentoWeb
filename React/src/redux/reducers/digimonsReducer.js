//Na nossa pasta infra crie uma pasta chamada reducers.
//Dentro dela, crie um arquivo index.js com o conteúdo:

import { SET_DIGIMONS } from '../actions/actionTypes';
const initialState = {
  digimons: []
};

export const digimonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIGIMONS:
      return {
        ...state,
        digimons: action.digimons
      };
    default:
      return state;
  }
};