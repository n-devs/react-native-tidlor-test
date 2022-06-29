import { put, call, takeEvery } from 'redux-saga/effects'
// import { api } from '../services'
import {
      GET_NAVIGATION,
      GET_NAVIGATION_REQUESTED,
      CREATE_NAVIGATION,
      CREATE_NAVIGATION_REQUESTED,
      UPDATE_NAVIGATION,
      UPDATE_NAVIGATION_REQUESTED,
      DELETE_NAVIGATION,
      DELETE_NAVIGATION_REQUESTED
} from '../constants/navigation';
// import { initState } from '../reducers/navigation'

export function* getNavigationRedux() {

      // const navigation = yield call(initState)
      yield put({ type: GET_NAVIGATION })
}

export function* setNavigationRedux({ payload }) {
      yield put({ type: UPDATE_NAVIGATION, payload: payload })
}


export default function* navigationSaga() {
      yield takeEvery(GET_NAVIGATION_REQUESTED, getNavigationRedux);
      yield takeEvery(UPDATE_NAVIGATION_REQUESTED, setNavigationRedux);
}