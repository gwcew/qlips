import { combineReducers } from 'redux';

import window from './window';
import gridvideo from './gridvideo'
import commentHandler from './comments';

export default combineReducers({
  window, gridvideo, commentHandler,
});
