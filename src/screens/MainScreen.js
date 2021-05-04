import React from 'react';

import { StyleSheet, View, Text, Button } from "react-native";

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate('Post');
  }
  return (
    <View style={styles.center}>
      <Text>Main screen</Text>
      <Button title='go to post' onPress={goToPost}/>
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'My blog',
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})