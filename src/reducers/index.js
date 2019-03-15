import { ADD_MESSAGE, LIKES_UP, DISLIKES_UP } from '../constants/action-types';

const initialState = {
  messages: [{
    displayName: 'Charles Powell',
    message: 'Welcome to Chatter! Press "Add Message" to begin Chattering!',
    time: 'now',
    likes: 0,
    dislikes: 0
  }]
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      }

    case LIKES_UP:
      return {
        ...state,
        messages: state.messages.map((message, idx) => {
          if ( idx !== action.id ) {
            return message;
          }

          return {
            ...message,
            likes: message.likes + action.value
          }
        })
      }

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
          }
        })
      }
  
    default:
      return state;
  }
}
export default rootReducer;
