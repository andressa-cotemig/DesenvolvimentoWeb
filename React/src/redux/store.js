//Na nossa pasta infra crie o arquivos store.js com o conteúdo:

import { createStore } from 'redux';
//os reducers serão criados mais adiante
import { Reducers } from './reducers/index';
//vamo usar o redux devTools para visualizar os dados no navegador
import { composeWithDevTools } from 'redux-devtools-extension';

export const Store = createStore(Reducers, composeWithDevTools());

Store.subscribe(() =>
  console.log('store foi modificada', Store.getState())
)