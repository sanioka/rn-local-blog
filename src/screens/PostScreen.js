import React, { useEffect } from 'react';

import { StyleSheet, View, Text, Image, Button, ScrollView, Alert } from "react-native";
import { DATA } from "../data";
import { THEME } from "../theme";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');

  const postItem = DATA.find(item => item.id = postId);

  // useEffect(() => {
  //   navigation.setParams({ booked: postItem.booked });
  // }, [])

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
  const booked = navigation.getParam('booked');

  const iconName = booked ? 'ios-star' : 'ios-star-outline';
  return {
    headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo'
          iconName={iconName}
          onPress={() => console.log('press photo')}
        />
      </HeaderButtons>
    ),
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