import reducers from '../reducers'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
