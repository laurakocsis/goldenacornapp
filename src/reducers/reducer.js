import { combineReducers } from 'redux';

function acorns(state = { counter: 0 }, action) {
  switch (action.type) {
    case BUY_ACORN:
      return { ...state, counter: state.counter + action.payload }
    case EAT_ACORN:
      if (conuter > 1) {
        return { ...state, counter: state.counter + action.payload }
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  acorns,
});

export default rootReducer;