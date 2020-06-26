import { combineReducers } from 'redux';
import novel from './novel.reducer';
import auth from './auth.reducers';

export default combineReducers({
  novel,
  auth,
});
