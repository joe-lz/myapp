import { SET_LOCAL_CITYS } from '../../constants';

const initialState = null;

const localCitys = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case SET_LOCAL_CITYS:
      return data;
    default:
      return state;
  }
};

export default localCitys;
