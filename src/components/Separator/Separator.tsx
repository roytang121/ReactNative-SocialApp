import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface ISeparatorProps {
  full: boolean;
}

export class Separator extends React.PureComponent<ISeparatorProps> {
  get width(): string {
    return this.props.full ? '100%' : '90%';
  }

  render() {
    return <View style={{ ...styles.separator, width: this.width }} />;
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 0.5, 
    backgroundColor: '#eee',
    alignSelf: 'center',
  }
});
