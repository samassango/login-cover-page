
import { combineReducers } from 'redux';

import reducerLogin from './reducer';

const reducer = combineReducers({
  login: reducerLogin
});

export default reducer;