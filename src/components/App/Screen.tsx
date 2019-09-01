import React, { Fragment } from 'react';
import { StatusBar, SafeAreaView, View, StyleSheet } from 'react-native';

export class Screen extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
          <View style={styles.appContainerStyle}>
            { this.props.children }
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
} 

const styles = StyleSheet.create({
  appContainerStyle: {
    flex: 1,
  }
});
