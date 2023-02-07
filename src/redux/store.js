import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './counterReducer';
import productsReducer from './productsReducer';
import createSagaMiddleware from '@redux-saga/core';
import {all} from 'redux-saga/effects';
import {fetchAllProductsSaga} from './productsSaga';

const sagaMiddleware = createSagaMiddleware();

// Create Root reducer by combining all reducers
const rootReducer = combineReducers({counterReducer, productsReducer});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Create Root Saga by combining all sagas
function* rootSaga() {
  yield all([fetchAllProductsSaga()]);
}

// Run root saga
sagaMiddleware.run(rootSaga);

export default store;
