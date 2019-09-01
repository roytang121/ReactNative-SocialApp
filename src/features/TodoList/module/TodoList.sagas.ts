import { call, put, select } from 'redux-saga/effects';
import { ITodoItem } from './TodoList.types';
import * as TodoService from '../../../api/TodoListService';
import { fetchTodosSucces } from './TodoList.actions';
import { Action } from 'redux-actions';
import { IRootState } from '../../../reducers/reducers';

export function* onFetchTodo() {
  const todoList: ITodoItem[] = yield call(TodoService.todos);
  yield put(fetchTodosSucces(todoList));
}

export function* onDeleteItem(action: Action<number>) {
  const todoList: ITodoItem[] = yield select((state: IRootState) => state.todo.items);
  yield put(fetchTodosSucces(
    todoList.filter(todo => todo.id !== action.payload),
  ));
}
