import { DISLIKES_UP } from '../constants/action-types';

const dislikesUp = payload => {
  return { type: DISLIKES_UP, id: payload, value: 1 };
};

export default dislikesUp;