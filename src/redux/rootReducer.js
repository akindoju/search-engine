import { combineReducers } from 'redux';
import resultReducer from './result/result.reducer';

const rootReducer = combineReducers({ result: resultReducer });

export default rootReducer;
