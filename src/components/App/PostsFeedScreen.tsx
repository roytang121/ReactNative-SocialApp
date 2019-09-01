import React, { Component } from 'react';
import { PostsFeed } from '../../features/PostsFeed/modules';
import { Screen } from './Screen';
import { INavigationProps } from '../../navigation/Navigation';

export class PostsFeedScreen extends Component<INavigationProps> {
  render() {
    return (
      <Screen>
        <PostsFeed />
      </Screen>
    );
  }
}
