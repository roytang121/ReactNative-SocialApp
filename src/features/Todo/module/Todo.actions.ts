import { createAction } from 'redux-actions';

export enum Action {
  TODO_FETCH = 'TODO_FETCH'
}

export const fetchTodos = createAction(Action.TODO_FETCH);
