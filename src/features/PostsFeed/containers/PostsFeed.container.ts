import { connect } from 'react-redux';
import { PostsFeed, IEvents, IProps } from '../components/PostsFeed';
import { bindActionCreators } from 'redux';
import { fetchPostsFeed, selectPost } from '../modules/PostsFeed.actions';
import { IRootState } from '../../../reducers/reducers';

export interface IPostProps {
  onPostSelected: () => void; 
}

const mapStateToProps = (state: IRootState): IProps => ({
  posts: state.posts.posts,
  users: state.posts.users,
  comments: state.posts.comments,
});

const mapDispatchToProps = (dispatch: any): IEvents => ({
  fetchPosts: bindActionCreators(fetchPostsFeed, dispatch),
  selectPost: bindActionCreators(selectPost, dispatch),
});

export const PostsFeedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsFeed);
