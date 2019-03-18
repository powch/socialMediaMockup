import { ADD_MESSAGE } from '../constants/action-types';

const addMessage = payload => {
  return { 
    type: ADD_MESSAGE, 
    displayName: payload.displayName, 
    message: payload.message 
  };
};

export default addMessage;