import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from '../reducers/index';

function ChatguruStore(initialState) {
  const middlewares = [ReduxPromise];

  const store =  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    ),
  );

  return store;
};

export default ChatguruStore;
