import { SIGN_IN } from '../constants/action-types';

const signIn = payload => {
  return { type: SIGN_IN, displayName: payload };
};

export default signIn;
