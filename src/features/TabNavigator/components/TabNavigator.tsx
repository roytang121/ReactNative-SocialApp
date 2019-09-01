import React, { PureComponent, ReactNode } from 'react';
import { View, StyleProp, ViewStyle, Text } from 'react-native';
import { ITab } from '../modules/TabNavigator.typings';

export interface ITabNavigatorProps {
  tabs: ITab[];
}

export class TabNavigator extends PureComponent<ITabNavigatorProps> {

  tabViews = () => {
    return this.props.tabs.map((tab, index) => 
      <View key={`${index}`}>
        <Text>{tab.id}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={containerStyle}>
        {this.tabViews()}
      </View>
    );
  }
}

const containerStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: 'blue',
  height: 98,
  minHeight: 98,
};
