import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Post } from './Post';
import { IPostDetail } from '../modules/PostsFeed.types';
import { Separator } from '../../../components/Separator/Separator';
import { CommentList } from './CommentList';
import { noop } from 'lodash';
import { selectPost } from '../modules/PostsFeed.actions';

export interface IPostDetailProps {
  postDetail: IPostDetail;
}

export class PostDetail extends PureComponent<IPostDetailProps> {
  renderPlaceHolder() {
    return (
      <View>
        <Text>No post to show.</Text>
      </View>
    );
  }

  renderPost() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Post
            selectPost={noop}
            item={this.props.postDetail.post}
            user={this.props.postDetail.user}
            comments={this.props.postDetail.comments}
            showDetail={true} />
          <Separator full={false} />
          <CommentList comments={this.props.postDetail.comments} />
        </View>
      </ScrollView>
    );
  }

  render() {
    return this.props.postDetail ? this.renderPost() : this.renderPlaceHolder();
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#E1E8ED',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  }
})
