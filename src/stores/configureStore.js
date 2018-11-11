import reducers from '../reducers'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export function configureStore(initialState = {reducePeeps: { isFetching: true }}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();
