import { combineReducers } from 'redux';

export const peeps = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PEEPS':
      return action.peeps;
    case 'CLEAR_PEEPS':
      return [];
    case 'REQUEST_PEEPS':
      return [{body:'loading', user: {handle: 'loading'}}];
    default:
      return state;
  }
};

const reducers = combineReducers({ peeps });

export default reducers
