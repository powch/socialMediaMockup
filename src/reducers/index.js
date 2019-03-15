import { ADD_MESSAGE } from '../constants/action-types';

const initialState = {
  messages: []
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
