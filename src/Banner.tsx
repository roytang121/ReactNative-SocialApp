import React, { Fragment } from 'react';
import {
  Text, View,
} from 'react-native';

export class Banner extends React.PureComponent {

  render() {
    return (
      <Fragment>
        <View style={{ height: 100, backgroundColor: 'white' }}>
          <Text>Banner Yoyo</Text>
        </View>
      </Fragment>
    );
  }
}
