import { ADD_MESSAGE, LIKES_UP, DISLIKES_UP } from '../constants/action-types';
import moment from 'moment';

const initialState = {
  messages: [{
    displayName: 'Charles Powell',
    message: 'Welcome to Chatter! Press "Add Message" to begin Chattering!',
    time: moment().format('h:mm a'),
    likes: 1,
    dislikes: 0
  }]
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      };

    //If index is equal to the id of the component the event happens, update likes + 1
    case LIKES_UP:
      return {
        ...state,
        messages: state.messages.map((message, idx) => {
          if (idx !== action.id) {
            return message;
          }

          return {
            ...message,
            likes: message.likes + action.value
          };
        })
      };

    //If index is equal to the id of the component the event happens, update dislikes + 1
    case DISLIKES_UP:
      return {
        ...state,
        messages: state.messages.map((message, idx) => {
          if (idx !== action.id) {
            return message;
          }

          return {
            ...message,
            dislikes: message.dislikes + action.value
          };
        })
      };

    default:
      return state;
  }
}
export default rootReducer;
