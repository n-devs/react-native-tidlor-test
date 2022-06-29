import {
  UPDATE_NAVIGATION
} from '../constants/navigation';

export const initState = {
  state: 0,
  path: "index",
  header: "หน้าแรก"
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case UPDATE_NAVIGATION:
      return { ...state, ...payload };
    default: return state;
  }
}