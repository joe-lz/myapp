import { INCREASE, DECREASE } from '../../constants';

export function INCREASE_FUNC(data) {
  return {
    type: INCREASE,
    data,
  };
}

export function DECREASE_FUNC(data) {
  return {
    type: DECREASE,
    data,
  };
}
