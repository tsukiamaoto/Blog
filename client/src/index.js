import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from  'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import createReducers from './store/reducer';
import rootSaga from './store/sagaManager';
import history from './actions/history';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  createReducers(history) ,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);