import { IPost, IUser, IComment, IPostDetail } from './PostsFeed.types';
import { call, put } from 'redux-saga/effects';
import { PostsService } from '../../../api/PostsService';
import { PostsFeedActions } from '.';
import { Action } from 'redux-actions';
import NavigationService from '../../../services/NavigationService';

export function* onFetchPosts() {
  try {
    const users: IUser[] = yield call(PostsService.users);
    const posts: IPost[] = yield call(PostsService.posts);
    const comments: IComment[] = yield call(PostsService.comments);
    yield put(PostsFeedActions.fetchUsersSuccess(users));
    yield put(PostsFeedActions.fetchCommentsSuccess(comments));
    yield put(PostsFeedActions.fetchPostsFeedSuccess(posts));
  } catch (error) {
    // TODO: notification error
    console.error(error);
  }
}

export function* onSelectPost(action: Action<IPostDetail>) {
  yield call(NavigationService.push, 'Post', { postDetail: action.payload });
}
