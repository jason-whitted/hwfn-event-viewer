import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { metaReducer } from 'store/meta';

export default combineReducers({
  meta: metaReducer,
  routing: routerReducer,
});
