import { connect } from 'react-redux';
import { UserProfile, IProps, IEvents } from '../components/UserProfile';
import { IRootState } from '../../../reducers/reducers';
import { IUser, IPost } from '../../PostsFeed/modules/PostsFeed.types';
import { find } from 'lodash';
import { bindActionCreators } from 'redux';
import { fetchAlbums } from '../../Album/modules/Album.actions';
import { IAlbum } from '../../Album/modules/Album.types';

const mapStateToProps = (state: IRootState, ownProps: Partial<IProps>): IProps => {
  const user: IUser = find(state.posts.users, ['id', ownProps.userId]);
  const posts: IPost[] = state.posts.posts.filter(post => post.userId === user.id);
  const albums: IAlbum[] = state.albums.albums.filter(album => album.userId === user.id);

  return {
    user,
    posts,
    albums
  };
};

const mapDispatchToProps = (dispatch): IEvents => ({
  fetchAlbums: bindActionCreators(fetchAlbums, dispatch),
});

export const UserProfileContainer = 
  connect(mapStateToProps, mapDispatchToProps)(UserProfile);
