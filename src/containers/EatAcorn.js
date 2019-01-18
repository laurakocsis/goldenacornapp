import { connect } from 'react-redux';
import { eatAcorn } from '../actions';
import Button from '../components/Button';

const mapStateToProps = () => {
  return {
    value: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clicked: () => {
      dispatch(eatAcorn(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;
