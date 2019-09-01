import { IPost, IUser, IComment } from '../features/PostsFeed/modules/PostsFeed.types';
// @ts-ignore missing @types/url
import { resolve } from 'url';
import { API_URL } from '../utils/constants';

const posts = async (): Promise<IPost[]> => {
  const response = await fetch(resolve(API_URL, 'posts'), { method: 'GET' });
  return response.json();
};

const users = async (): Promise<IUser[]> => {
  const response = await fetch(resolve(API_URL, 'users'), { method: 'GET' });
  return response.json();
};

const comments = async (): Promise<IComment[]> => {
  const response = await fetch(resolve(API_URL, 'posts/1/comments'), { method: 'GET' });
  return response.json();
};

export const PostsService = {
  posts,
  users,
  comments,
};
