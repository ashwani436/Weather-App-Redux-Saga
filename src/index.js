import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './components/redux/reducer';
import rootSaga from './components/redux/sagas';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import { createRoot } from 'react-dom/client'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
