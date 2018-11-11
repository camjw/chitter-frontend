import { combineReducers } from 'redux';

export const reducePeeps = (state = [], action) => {
  console.log(action.type)
  switch (action.type) {
    case 'ADD_PEEPS':
      return { peeps: action.peeps, isFetching: action.isFetching };
    case 'CLEAR_PEEPS':
      return { peeps: [], isFetching: action.isFetching };
    case 'REQUEST_PEEPS':
      return { peeps: action.peeps, isFetching: action.isFetching };
    default:
      return state;
  }
};

const reducers = combineReducers({ reducePeeps });

export default reducers
