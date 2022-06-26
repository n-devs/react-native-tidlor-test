import {
      UPDATE_ฺNAVIGATION
    } from '../constants/nav';
    
    export const initState = {
      state: 0,
      path: "index",
      header: "หน้าแรก"
    };
    
    export default function nav(state = initState, action) {
      switch (action.type) {
        case UPDATE_ฺNAVIGATION:
          return { ...state, ...action.payload };
        default: return state;
      }
    }