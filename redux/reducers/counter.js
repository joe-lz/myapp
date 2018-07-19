import { INCREASE, DECREASE } from '../../constants';

const initialState = 0;

const counter = (state = initialState, action) => {
  const val = action.data ? action.data : 1;
  switch (action.type) {
    case INCREASE:
      return state + val;
    case DECREASE:
      return state - val;
    default:
      return state;
  }
};

export default counter;
