import React, { Component } from 'react';
import { INavigationProps } from '../../navigation/Navigation';
import { Screen } from './Screen';
import { UserProfile } from '../../features/UserProfile/modules';
import { NavigationScreenOptions } from 'react-navigation';
import { NavButtonBack } from '../../navigation/NavigationButton';

export class UserProfileScreen extends Component<INavigationProps> {
  static navigationOptions: NavigationScreenOptions = {
    headerLeft:  (
      <NavButtonBack />
    )
  };

  get userId(): number {
    return this.props.navigation.getParam('userId');
  }

  render() {
    return (
      <Screen>
        <UserProfile userId={this.userId} />
      </Screen>
    );
  }
}
