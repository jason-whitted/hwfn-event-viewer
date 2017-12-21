import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f);

export default initialState => createStore(rootReducer, initialState, middleware);
