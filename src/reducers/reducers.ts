import { combineReducers } from 'redux';
import { todoReducer } from '../features/Todo/module/Todo.reducers';

export const rootReducers = combineReducers({
  todo: todoReducer,
});
