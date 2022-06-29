import {
      SET_LOADING,
      GET_USERS,
      CREATE_USER,
      UPDATE_USER,
      DELETE_USER
} from '../constants/users';

// Define your state here
const initialState = {
	loading: false,
	users: []
}

// This export default will control your state for your application
export default(state = initialState, {type, payload}) => {
	switch(type) {
		// Set loading
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		// Get users
		case GET_USERS:
			return {
				...state,
				users: payload,
				loading: false
			}
		// Set user 
		case UPDATE_USER:
			return {
				...state,
				title: payload
			}
		// Create new user
		case CREATE_USER:
			return {
				...state,
				users: [payload, ...state.users],
				loading: false
			}
		// Delete existed user
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== payload),
				loading: false
			}
		// Return default state if you didn't match any case
		default:
			return state
	}
}