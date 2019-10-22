import { produce } from 'immer';

const INITIAL_STATE = {
  meetup: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/DETAILS_MEETUP_REQUEST': {
        draft.meetup = action.payload.meetup;
        break;
      }

      case '@meetup/RESET_MEETUP_CACHE': {
        draft.meetup = null;
        break;
      }
      default:
        break;
    }
  });
}
