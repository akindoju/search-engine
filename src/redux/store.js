import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const middelwares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middelwares));

export default store;
