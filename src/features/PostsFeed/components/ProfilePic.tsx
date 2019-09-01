import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export interface IProps {
  userId?: number;
  postId?: number; // for auto matching userId
}

export interface IEvents {
  viewUser: (userId: number) => void;
}

export class ProfilePic extends PureComponent<IProps & IEvents> {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.viewUser(this.props.userId)}>
        <View style={styles.profilePic} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
  },
});
