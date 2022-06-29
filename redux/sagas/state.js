import { put, call, takeEvery } from 'redux-saga/effects'
import { api } from '../services'
import {
      GET_STATE,
      GET_STATE_REQUESTED,
      CREATE_STATE,
      CREATE_STATE_REQUESTED,
      UPDATE_STATE,
      UPDATE_STATE_REQUESTED,
      DELETE_STATE,
      DELETE_STATE_REQUESTED
} from '../constants/state';

export function* getStateRedux() {

      yield put({ type: GET_STATE })
}

export function* setStateRedux({ payload }) {
      yield put({ type: UPDATE_STATE, payload: payload })
}

export function* deleteStateRedux({ payload }) {
      yield put({ type: DELETE_STATE, payload: payload })
}


export default function* stateSaga() {
      yield takeEvery(GET_STATE_REQUESTED, getStateRedux);
      yield takeEvery(UPDATE_STATE_REQUESTED, setStateRedux);
      yield takeEvery(DELETE_STATE_REQUESTED, deleteStateRedux);
}