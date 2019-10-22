import { combineReducers } from 'redux';

import auth from './auth/reducer';
import profile from './profile/reducer';
import meetup from './meetup/reducer';

export default combineReducers({
  auth,
  profile,
  meetup,
});
