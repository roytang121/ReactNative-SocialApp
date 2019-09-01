import { createAction } from 'redux-actions';
import { IPost, IUser, IComment, IPostDetail } from './PostsFeed.types';

export enum Action {
  POSTS_FEED_FETCH = 'POSTS_FEED_FETCH',
  POSTS_FEED_FETCH_SUCCESS = 'POSTS_FEED_FETCH_SUCCESS',
  POSTS_FEED_FETCH_USERS_SUCCESS = 'POSTS_FEED_FETCH_USERS_SUCCESS',
  POSTS_FEED_FETCH_COMMENTS_SUCCESS = 'POSTS_FEED_FETCH_COMMENTS_SUCCESS',
  POSTS_FEED_SELECT_POST = 'POSTS_FEED_SELECT_POST',
}

export const fetchPostsFeed = createAction(Action.POSTS_FEED_FETCH);

export const fetchPostsFeedSuccess = createAction<IPost[]>(Action.POSTS_FEED_FETCH_SUCCESS);

export const fetchUsersSuccess = createAction<IUser[]>(Action.POSTS_FEED_FETCH_USERS_SUCCESS);

export const fetchCommentsSuccess = createAction<IComment[]>(Action.POSTS_FEED_FETCH_COMMENTS_SUCCESS);

export const selectPost = createAction<IPostDetail>(Action.POSTS_FEED_SELECT_POST);
