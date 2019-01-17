import { connect } from 'react-redux';
import { buyAcorn } from '../actions';
import Button from '../components/Button';

const mapStateToProps = () => {
  return {
    value: 'Buy one',
  };
};

const mapDispatchToProps = () => {
  return {
    onClick: () => {
      dispatch(buyAcorn(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;
