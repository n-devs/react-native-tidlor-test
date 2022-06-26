import {
  UPDATE_EDITONIDSTATE,
  UPDATE_EDITONSTATE,
  UPDATE_DBSTATE
} from '../constants/dataState';

export const initState = {
  editOnId: null,
  editOn: {
    id: null,
    firstName: "",
    lastName: "",
    IDNumber: "",
    phoneNumber: ""
  },
  db: []
};

export default function dataState(state = initState, action) {
  switch (action.type) {
    case UPDATE_EDITONIDSTATE:
      return { ...state, editOnId: action.payload };
    case UPDATE_EDITONSTATE:
      return { ...state, editOn: action.payload };
    case UPDATE_DBSTATE:
      return { ...state, db: action.payload };
    default: return state;
  }
}