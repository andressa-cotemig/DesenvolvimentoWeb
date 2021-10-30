import { connect } from 'react-redux';
import { clickButton } from '../../redux/actions';
import AlteraNome from './AlteraNome';

const mapDispatchToProps = dispatch => ({
    clickButton: (value) => dispatch(clickButton(value))
});

const AlteraNomeConnected = connect(null, mapDispatchToProps)(AlteraNome);

export { AlteraNomeConnected as AlteraNome }