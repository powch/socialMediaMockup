import { ADD_MESSAGE } from '../constants/action-types';

const initialState = {
  messages: [{
    displayName: 'Foo',
    message: 'Welcome to Chatter! Press "Add Message" to begin Chattering!'
  }]
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: state.messages.concat( action.payload )
      });
  
    default:
      return state;
  }
}
export default rootReducer;
