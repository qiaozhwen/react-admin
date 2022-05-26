import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer'
// import {testSaga} from "../sagas/testSaga.ts";
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware=createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(testSaga)
export default store
