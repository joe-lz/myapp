import { REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_POSTS } from '../../constants';

const initialState = null;

const weatherData = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case REQUEST_POSTS:
      return null;
    case RECEIVE_POSTS:
      return data;
    case INVALIDATE_POSTS:
      return null;
    default:
      return state;
  }
};

export default weatherData;
