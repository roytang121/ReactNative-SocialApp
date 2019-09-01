import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { IPost, IUser, IComment, IPostDetail } from '../modules/PostsFeed.types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProfilePic } from '../modules';
import { Colors } from '../../../utils/colors';
import { selectPost } from '../modules/PostsFeed.actions';

export interface IPostProps {
  item: IPost;
  user: IUser;
  comments: IComment[];
  showDetail?: boolean;
}

export interface IPostEvents {
  selectPost: (postDetail: IPostDetail) => void;
}

export class Post extends PureComponent<IPostProps & IPostEvents> {
  handleOnPress = () => {
    this.props.selectPost({
      user: this.props.user,
      post: this.props.item,
      comments: this.props.comments,
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handleOnPress} underlayColor="#F5F5F5">
        <View style={styles.container}>
          <View style={styles.profilePicContainer}>
            <ProfilePic userId={this.props.user.id} />
          </View>
          <View style={styles.postContent}>
            <View style={styles.metaContainer}>
              <Text style={styles.postMeta}>@{this.props.user.username}</Text>
              <Icon name="ios-share-alt" size={14} color="lightgray" />
            </View>
            <Text 
              style={styles.postTitle}
              numberOfLines={this.props.showDetail ? 0 : 1}
              ellipsizeMode={'tail'}>
              {this.props.item.title}
            </Text>
            <Text 
              style={styles.postBody}>
              {this.props.item.body}
            </Text>
            <View style={styles.comment}>
              <Icon name="ios-send" size={18} color="lightgray" />
              <View style={{ width: 8 }} />
              <Text>{this.props.comments.length}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 24,
    backgroundColor: 'transparent'
  },
  profilePicContainer: {
    paddingRight: 12,
  },
  postContent: {
    flex: 1,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  postTitle: {
    fontWeight: 'bold',
    paddingBottom: 4,
    color: Colors.textTitle,
  },
  postBody: {
    color: Colors.textBody,
    fontWeight: '200',
  },
  postMeta: {
    color: Colors.textMeta,
    fontWeight: '500',
  },
  metaContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  }
});
