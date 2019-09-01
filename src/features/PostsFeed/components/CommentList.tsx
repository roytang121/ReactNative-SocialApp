import React, { PureComponent } from 'react';
import { FlatList, ListRenderItem, Text, View, StyleSheet } from 'react-native';
import { IComment } from '../modules/PostsFeed.types';
import { Separator } from '../../../components/Separator/Separator';
import { ProfilePic } from '../modules';

export interface ICommentListProps {
  comments: IComment[];
}

export class CommentList extends PureComponent<ICommentListProps> {
  get data(): IComment[] {
    return this.props.comments;
  }

  keyForRow = (_:any, index: number): string => {
    return `comment-${index}`;
  }

  renderRow: ListRenderItem<IComment> = ({ item }) => {
    return (
      <View style={styles.container}>
        <ProfilePic postId={item.postId} />
        <View style={styles.bodyContainer}>
          <Text style={styles.commentTitle}>{item.name}</Text>
          <Text style={styles.commentBody}>{item.body}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        keyExtractor={this.keyForRow}
        data={this.data}
        renderItem={this.renderRow}
        ItemSeparatorComponent={() => <Separator full={true} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingTop: 12,
    paddingLeft: 32,
    paddingRight: 24,
    paddingBottom: 12
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  commentTitle: {
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  commentBody: {
    fontWeight: '200',
    color: '#555',
  }
});
