import { connect } from 'react-redux';
import { ProfilePic, IProps, IEvents } from '../components/ProfilePic';
import { IRootState } from '../../../reducers/reducers';
import { isNil, find, get } from 'lodash';
import { bindActionCreators } from 'redux';
import { viewUser } from '../../UserProfile/modules/UserProfile.actions';

const mapStateToProps = (state: IRootState, ownProps: Partial<IProps>): IProps => {
  let userId: number;
  if (!isNil(ownProps.postId)) {
    userId = get(
      find(state.posts.posts, ['id', ownProps.postId]),
      ['userId'],
      null
    );
  } else {
    userId = ownProps.userId;
  }

  return { userId, postId: ownProps.postId };
};

const mapDispatchToProps = (dispatch): IEvents => ({
  viewUser: bindActionCreators(viewUser, dispatch),
});

export const ProfilePicContaniner = connect(mapStateToProps, mapDispatchToProps)(ProfilePic);
