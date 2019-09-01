import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { IPost, IUser, IComment, IPostDetail } from '../modules/PostsFeed.types';
import { getUserForPost, getCommentsForPost } from '../modules/PostsFeed.utils';
import { Separator } from '../../../components/Separator/Separator';
import { Post } from '../modules';

export interface IProps {
  posts: IPost[];
  users: IUser[];
  comments: IComment[];
}

export interface IEvents {
  fetchPosts: () => void;
  selectPost: (post: IPostDetail) => void;
}

export class PostsFeed extends React.PureComponent<IProps & IEvents> {
  componentDidMount() {
    this.props.fetchPosts();
  }

  get data(): IPost[] {
    return this.props.posts;
  }

  keyForRow = (_:any, index: number): string =>
    `post-item-${index}`

  handleOnPress = (postDetail: IPostDetail) => {
    this.props.selectPost(postDetail);
  }

  renderRowForItem: ListRenderItem<IPost> = ({ item }) => {
    const user = getUserForPost(item, this.props.users);
    const comments = getCommentsForPost(item, this.props.comments);
    return (
      <Post
        item={item} 
        user={user}
        comments={comments} />
    );
  }

  renderItemSeparator = () => <Separator full={true} />;

  render() {
    return (
      <FlatList
        data={this.data}
        keyExtractor={this.keyForRow}
        renderItem={this.renderRowForItem}
        ItemSeparatorComponent={this.renderItemSeparator}
        style={{ backgroundColor: 'transparent' }}
      />
    );
  }
}
