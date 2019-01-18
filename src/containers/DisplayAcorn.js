import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = (state) => {
  return {
    value: state.acorns.counter,
  }
}

const DisplayAcorn = connect(
  mapStateToProps)(Display);

export default DisplayAcorn;
