import {
  ADD_MESSAGE,
  LIKES_UP,
  DISLIKES_UP,
  SIGN_IN,
  SIGN_OUT
} from '../constants/action-types';
import moment from 'moment';

const initialState = {
  displayName: null,
  messages: [
    {
      displayName: 'Charles Powell',
      message:
        'Welcome to Chatter! Press "Add Chat" to begin Chattering! Chosen display names will persist until signed out.',
      time: moment().format('h:mm a'),
      likes: 1,
      dislikes: 0
    }
  ]
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    // Store chose display name
    case SIGN_IN:
      return {
        ...state,
        displayName: action.displayName
      };  
    // Clear display name to allow another choice
    case SIGN_OUT:
      return {
        ...state,
        displayName: action.displayName
      };
    // Concat new message object to messages array
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat({
          displayName: action.displayName,
          message: action.message,
          time: moment().format('h:mm a'),
          likes: 0,
          dislikes: 0
        })
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

    // Return previous state if no cases match
    default:
      return state;
  }
}
export default rootReducer;
