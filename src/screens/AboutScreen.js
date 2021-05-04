import React from 'react';

import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const AboutScreen = (props) => {
  return (
    <View style={styles.center}>
      <Text>About screen</Text>
    </View>
  )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'About',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle drawer'
        iconName='ios-menu'
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})