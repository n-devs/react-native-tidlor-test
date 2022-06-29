import { combineReducers } from 'redux';
// import nav from './nav';
import users from './users';
import navigation from './navigation';
import state from './state';

//Combine all the sub reducers
const rootReducer = combineReducers({
      navigationRedux: navigation,
      usersRedux: users,
      stateRedux: state
})

export default rootReducer