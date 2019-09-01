import React, { Component } from 'react';
import { Screen } from './Screen';
import { INavigationProps } from '../../navigation/Navigation';
import { PostDetailContainer } from '../../features/PostsFeed/containers/PostDetail.container';
import { IPostDetail } from '../../features/PostsFeed/modules/PostsFeed.types';
import { NavigationScreenOptions } from 'react-navigation';
import { NavButtonBack } from '../../navigation/NavigationButton';

export interface IPostDetailScreenParams {
  postDetail: IPostDetail;
}

export class PostDetailScreen extends Component<INavigationProps> {
  static navigationOptions: NavigationScreenOptions = {
    headerLeft:  (
      <NavButtonBack />
    )
  };

  get postDetailObject(): IPostDetail {
    return this.props.navigation.getParam('postDetail', null);
  }

  render() {
    return (
      <Screen>
        <PostDetailContainer
          postDetail={this.postDetailObject}
        />
      </Screen>
    );
  }
}
