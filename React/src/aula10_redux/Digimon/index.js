//Crie um arquivo index.js no seu componente
import { connect } from 'react-redux';
import { setDigimons } from '../../redux/actions';
import DigimonsRedux from './DigimonsRedux';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
  digimons: store.digimonsState.digimons
});

//O método mapDispatchToProps transforma a Action Creator clickButton 
//em uma prop para o componente.
const mapDispatchToProps = dispatch => ({
  setDigimons: (value) => dispatch(setDigimons(value))
});

//No momento de exportar o componente, precisamos fazer a sua conexão 
// através do método connect do React Redux
const DigimonsReduxConnected = connect(mapStateToProps, mapDispatchToProps)(DigimonsRedux);

export { DigimonsReduxConnected as DigimonsRedux }
