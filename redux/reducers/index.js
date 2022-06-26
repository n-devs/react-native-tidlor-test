import { combineReducers } from 'redux';
import nav from './nav';
import dataState from './dataState';

//Combine all the sub reducers
const rootReducer = combineReducers({
      navigationRedux: nav,
      dataStateRedux: dataState
})

export default rootReducer