import {
  UPDATE_EDITONIDSTATE,
  UPDATE_EDITONSTATE,
  UPDATE_DBSTATE
} from '../constants/dataState';

export function updateEditOnIdState(editOnId) {
  console.log(editOnId);
  return (dispatch) => {
    dispatch({
      type: UPDATE_EDITONIDSTATE,
      payload: editOnId,
    });
  };
};

export function updateEditOnState(editOn) {
  console.log(editOn);
  return (dispatch) => {
    dispatch({
      type: UPDATE_EDITONSTATE,
      payload: editOn,
    });
  };
};

export function updateDBState(db) {
  console.log(db);
  return (dispatch) => {
    dispatch({
      type: UPDATE_DBSTATE,
      payload: db,
    });
  };
};