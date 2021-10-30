//Crie um arquivo index.js no seu componente
import { connect } from 'react-redux';
import { clickButton } from '../redux/actions';
import Aula10 from './Aula10';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

//O método mapDispatchToProps transforma a Action Creator clickButton 
//em uma prop para o componente.
const mapDispatchToProps = dispatch => ({
  clickButton: (value) => dispatch(clickButton(value))
});

//No momento de exportar o componente, precisamos fazer a sua conexão 
// através do método connect do React Redux
const Aula10Connected = connect(mapStateToProps, mapDispatchToProps)(Aula10);

export { Aula10Connected as Aula10 }
