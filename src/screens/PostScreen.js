import React from 'react';

import { StyleSheet, View, Text } from "react-native";

export const PostScreen = (props) => {
  return (
    <View styles={style.center}>
      <Text>Main screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})