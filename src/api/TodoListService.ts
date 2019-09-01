import { ITodoItem } from '../features/TodoList/module/TodoList.types';
import { API_URL } from '../utils/constants';
// @ts-ignore missing @types/url
import { resolve } from 'url';

export const todos = async (): Promise<ITodoItem[]> => {
  const response = await fetch(resolve(API_URL, 'todos'), { method: 'GET' });
  return response.json();
};
