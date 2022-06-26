import {
      UPDATE_ฺNAVIGATION
    } from '../constants/nav';
    
    export function updateNavigation(data) {
      console.log(data);
      return (dispatch) => {
        dispatch({
          type: UPDATE_ฺNAVIGATION,
          payload: data,
        });
      };
    }