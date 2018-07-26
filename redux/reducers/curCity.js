import { SET_CURCITY } from '../../constants';

const initialState = null;

const curCity = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case SET_CURCITY:
      return data;
    default:
      return state;
  }
};

export default curCity;
