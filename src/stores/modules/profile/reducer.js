import { produce } from 'immer';

const INITIAL_STATE = {
  user: null,
};

export default function profile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.profile;
        break;
      }
      case '@profile/UPDATE_PROFILE_SUCCESS': {
        draft.user = action.payload.profile;
        break;
      }
      default:
    }
  });
}
