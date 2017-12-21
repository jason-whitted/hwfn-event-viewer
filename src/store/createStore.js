import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import history from './history';

import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunk, routerMiddleware(history));

const enhancer = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default initialState => createStore(rootReducer, initialState, compose(middleware, enhancer));
