import { connect } from 'react-redux';
import Nome from './Nome'

const mapStateToProps = store => ({
    nome: store.clickState.newValue
});

const NomeConnected = connect(mapStateToProps)(Nome);

export { NomeConnected as Nome }