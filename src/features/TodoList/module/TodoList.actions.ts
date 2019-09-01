import { createAction } from 'redux-actions';
import { ITodoItem } from './TodoList.types';

export enum Action {
  TODO_FETCH = 'TODO_FETCH',
  TODO_FETCH_SUCCESS = 'TODO_FETCH_SUCCESS',
  TODO_DELETE = 'TODO_DELETE'
}

export const fetchTodos = createAction(Action.TODO_FETCH);

export const fetchTodosSucces = createAction<ITodoItem[]>(Action.TODO_FETCH_SUCCESS);

export const deleteItem = createAction<number>(Action.TODO_DELETE);
