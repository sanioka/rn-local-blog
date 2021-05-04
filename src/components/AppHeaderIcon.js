import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { StyleSheet, View, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { THEME } from "../theme";

export const AppHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      iconSize={24}
      IconComponent={Ionicons}
      color={Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'}
    />
  )
}

const styles = StyleSheet.create({

})