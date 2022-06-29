import {
  GET_STATE,
  UPDATE_STATE,
  DELETE_STATE
} from '../constants/state';

export const initState = {
  id: 0,
  firstName: "",
  lastName: "",
  IDNumber: "",
  phoneNumber: ""
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case GET_STATE:
      return { ...state, ...payload };
    case UPDATE_STATE:
      return { ...state, ...payload };
    case DELETE_STATE:
      return { ...state, ...payload };
    default: return state;
  }
}