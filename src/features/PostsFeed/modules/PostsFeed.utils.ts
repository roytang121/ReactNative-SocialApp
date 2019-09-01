import { IPost, IUser, IComment } from './PostsFeed.types';
import { find, filter } from 'lodash';

export const getUserForPost = (post: IPost, users: IUser[]) => {
  return find(users, user => user.id === post.userId) as IUser;
};

export const getCommentsForPost = (post: IPost, comments: IComment[]) => {
  return filter(comments, comment => comment.postId === post.id);
};
