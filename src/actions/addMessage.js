import { ADD_MESSAGE } from '../constants/action-types';

const addMessage = payload => {
  return { type: ADD_MESSAGE, payload };
};

export default addMessage;