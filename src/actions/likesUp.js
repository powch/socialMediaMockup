import { LIKES_UP } from '../constants/action-types';

const likesUp = payload => {
  return { type: LIKES_UP, id: payload, value: 1 };
};

export default likesUp;
