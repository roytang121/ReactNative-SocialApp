import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconButtonProps } from 'react-native-vector-icons/Icon';
import { Colors } from '../utils/colors';
import NavigationService from '../services/NavigationService';
const Icon = Ionicons.Button;

export const NavButton = (props: IconButtonProps) => {
  return (
    <Icon
      name="" 
      color={Colors.highlight}
      backgroundColor="white"
      {...props} />
  );
};

export const NavButtonBack = () => (
  <NavButton
    onPress={() => NavigationService.back()}
    name="ios-arrow-back"/>
);
