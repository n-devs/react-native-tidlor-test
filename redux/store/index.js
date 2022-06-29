import { applyMiddleware, createStore, compose } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index"
import { composeWithDevTools } from 'redux-devtools-extension'


const sagaMiddleware = createSagaMiddleware()


const store = createStore(
      rootReducer,
      {},
      // compose(applyMiddleware(thunk, logger)),
      // applyMiddleware(sagaMiddleware),
      composeWithDevTools(applyMiddleware(sagaMiddleware))
      // compose(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(rootSaga)

export default store;