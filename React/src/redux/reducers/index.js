//Na nossa pasta infra crie uma pasta chamada reducers.
//Dentro dela, crie um arquivo index.js com o conteúdo:

import { combineReducers } from 'redux';
import { clickReducer } from './clickReducer';
//import { OtherReducer } from './otherReducer';

//Caso sua aplicação possua vários reducers, 
//você pode combiná-los para enviá-los à Store 
//usando o método combineReducers.
export const Reducers = combineReducers({
  clickState: clickReducer,
  //otherState: otherReducer
});