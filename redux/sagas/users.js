import { put, call, takeEvery } from 'redux-saga/effects'
import { api } from '../services'
import {
      SET_LOADING,
      GET_USERS,
      GET_USERS_REQUESTED,
      CREATE_USER,
      CREATE_USER_REQUESTED,
      UPDATE_USER,
      UPDATE_USER_REQUESTED,
      DELETE_USER,
      DELETE_USER_REQUESTED
} from '../constants/users';

export function* getUsersRedux() {
      yield put({ type: SET_LOADING })
      const users = yield call(api.getUsers)
      yield put({ type: GET_USERS, payload: users })
}

export function* addUserRedux({ payload }) {
      yield put({ type: SET_LOADING })
      const create_users = yield call(api.createUsers, payload)
      yield put({ type: CREATE_USER, payload: create_users })
}

export function* setUserRedux({ payload }) {
      yield put({ type: SET_LOADING })
      const update_users = yield call(api.updateUsers, payload)
      yield put({ type: UPDATE_USER, payload: update_users })
}

export function* deleteUserRedux({ payload }) {
      yield put({ type: SET_LOADING })
      const delete_users = yield call(api.deleteUsers, payload)
      yield put({ type: DELETE_USER, payload: delete_users })
}

export default function* userSaga() {
      yield takeEvery(GET_USERS_REQUESTED, getUsersRedux);
      yield takeEvery(CREATE_USER_REQUESTED, addUserRedux);
      yield takeEvery(UPDATE_USER_REQUESTED, setUserRedux);
      yield takeEvery(DELETE_USER_REQUESTED, deleteUserRedux);
}