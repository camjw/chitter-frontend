import { combineReducers } from 'redux';
import reducePeeps from './reducePeeps';
import reduceUser from './reduceUser';

const reducers = combineReducers({ reducePeeps, reduceUser });

export default reducers;
