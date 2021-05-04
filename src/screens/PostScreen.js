import React from 'react';

import { StyleSheet, View, Text, Image, Button, ScrollView, Alert } from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');

  const postItem = DATA.find(item => item.id = postId);

  const removeHandler = () => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => console.log('OK Pressed'),
          style: 'destructive',
        }
      ],
      { cancelable: false },
    );
  }

  return (
    <ScrollView>
      <Image source={{uri: postItem.img}} style={styles.image}/>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{postItem.text}</Text>
      </View>
      <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date');
  return {
    headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular',
  }
})