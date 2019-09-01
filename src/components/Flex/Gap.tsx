import React from 'react';
import { View } from 'react-native';
import { get } from 'lodash';

export interface IGapProps {
  height?: number;
  width?: number;
}

export const Gap = (props: IGapProps) => (
  <View style={{
    width: get(props, ['width'], 0),
    height: get(props, ['height'], 0),
  }} />
);
