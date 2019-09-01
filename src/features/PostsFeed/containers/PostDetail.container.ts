import { connect } from 'react-redux';
import { IRootState } from '../../../reducers/reducers';
import { IPostDetailProps, PostDetail } from '../components/PostDetail';

const mapStateToProps = (state: IRootState, ownProps: Partial<IPostDetailProps>): IPostDetailProps => ({
  postDetail: ownProps.postDetail,
});

export const PostDetailContainer = connect(mapStateToProps)(PostDetail);
