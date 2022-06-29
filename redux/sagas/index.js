import { spawn } from 'redux-saga/effects'

// Sagas
import userSaga from './users'
import navigationSaga from './navigation'
import stateSaga from './state'

// Export the root saga
export default function* rootSaga() {
      console.log("Hello From Redux-Saga!")

      yield spawn(userSaga)
      yield spawn(navigationSaga)
      yield spawn(stateSaga)
}