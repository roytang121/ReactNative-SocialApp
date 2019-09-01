import { handleActions } from 'redux-actions';
import { fetchTodos, Action, fetchTodosSucces } from './TodoList.actions';
import { ITodoState } from './TodoList.types';

const initialState: ITodoState = {
  items: [],
  fetching: false,
};

export const todoReducer = handleActions<ITodoState, any>(
  {
    [Action.TODO_FETCH]: (state, action) => ({ ...state, fetching: true }),
    // @ts-ignore 
    [fetchTodosSucces.toString()]: (state, action) => ({
      ...state,
      fetching: false,
      items: action.payload,
    })
  },
  initialState,
);
