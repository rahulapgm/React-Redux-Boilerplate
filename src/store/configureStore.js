import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter } from "react-router-dom";

import { reducers }  from "./combineReducers";
import rootSagas from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
const configureStore = (initialState = {}) => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSagas);
  store.asyncReducers = {}; // Async reducer registry
  store.asyncSagas = {}; // Async saga registry
  return store;
};

export const withStore = Component => {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
  );
};
