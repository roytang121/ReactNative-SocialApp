import { reducer as postsFeedReducer } from './PostsFeed.reducers';
import { PostsFeedContainer } from '../containers/PostsFeed.container';
import * as PostsFeedActions from './PostsFeed.actions';
import * as PostsFeedSagas from './PostsFeed.saga';
import { PostDetailContainer } from '../containers/PostDetail.container';
import { ProfilePicContaniner } from '../containers/ProfilePic.container';
import { PostConatiner } from '../containers/Post.container';

export {
  postsFeedReducer,
  PostsFeedContainer as PostsFeed,
  PostsFeedActions,
  PostsFeedSagas,
  PostDetailContainer as PostDetail,
  ProfilePicContaniner as ProfilePic,
  PostConatiner as Post,
};
