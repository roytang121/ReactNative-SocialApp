import { connect } from 'react-redux';
import { Post, IPostProps, IPostEvents } from '../components/Post';
import { IRootState } from '../../../reducers/reducers';
import { IPost, IComment, IUser } from '../modules/PostsFeed.types';
import { find, get } from 'lodash';
import { bindActionCreators } from 'redux';
import { selectPost } from '../modules/PostsFeed.actions';

const mapStateToProps = (state: IRootState, ownProps: any): IPostProps => {
  const item: IPost = ownProps.item;
  const comments: IComment[] = state.posts.comments.filter(comment => comment.postId === item.id);
  const user: IUser = find(state.posts.users, ['id', item.userId]);
  return {
    item,
    comments,
    user,
    showDetail: get(ownProps, ['showDetail'], false),
  };
};

const mapDispatchToProps = (dispatch): IPostEvents => ({
  selectPost: bindActionCreators(selectPost, dispatch),
});

export const PostConatiner = connect(mapStateToProps, mapDispatchToProps)(Post);
