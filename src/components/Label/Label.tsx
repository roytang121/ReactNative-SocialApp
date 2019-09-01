import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Gap } from '../Flex/Gap';
import { Flex } from '../../utils/flex';
import { Colors } from '../../utils/colors';

export interface ILabelProps {
  labelText: string;
  icon: string;
}

export class Label extends PureComponent<ILabelProps> {
  render() {
    return (
      <View style={styles.conatiner}>
        <Ionicons name={this.props.icon} size={14} color={Colors.textMeta}/>
        <Gap width={4} />
        <Text style={{ color: Colors.textMeta, fontSize: 12 }}>{this.props.labelText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    ...Flex.row,
    alignItems: 'center',
    paddingVertical: 4,
    paddingRight: 8,
  }
});
