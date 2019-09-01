import { IPostsFeedState } from './PostsFeed.types';
import { handleActions } from 'redux-actions';
import { Action } from './PostsFeed.actions';

export const initialState: IPostsFeedState = {
  posts: [],
  users: [],
  comments: [],
  fetching: false,
};

export const reducer = handleActions<IPostsFeedState, any>(
  {
    [Action.POSTS_FEED_FETCH]: (state: IPostsFeedState, _) =>
      ({ ...state, fetching: true }),

    [Action.POSTS_FEED_FETCH_SUCCESS]: (state: IPostsFeedState, action) =>
      ({ ...state, fetching: false, posts: action.payload }),

    [Action.POSTS_FEED_FETCH_USERS_SUCCESS]: (state: IPostsFeedState, action) =>
      ({ ...state, users: action.payload }),

    [Action.POSTS_FEED_FETCH_COMMENTS_SUCCESS]: (state: IPostsFeedState, action) =>
      ({ ...state, comments: action.payload }),
  },
  initialState,
);
