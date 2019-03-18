import { SIGN_OUT } from '../constants/action-types';

const signOut = () => {
  return { type: SIGN_OUT, displayName: null };
};

export default signOut;
