import { handleAction } from 'redux-actions';
import { fetchTodos } from './Todo.actions';
import { ITodoState } from './Todo.typings';

const initialState: ITodoState = {
  items: [],
  fetching: false,
};

export const todoReducer = handleAction(
  fetchTodos,
  (state, action) => ({
    ...state,
    fetching: true,
  }),
  initialState,
);
