import React, { useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Image, Button, ScrollView, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from 'react-redux';

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { removePost, toggleBooked } from "../store/actions/postActions";

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const dispatch = useDispatch();

  const postItem = useSelector(state => state.post.allPosts.find(p => p.id === postId));

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked])

  // workaround
  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(postId));
  }, [dispatch, postId])

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler])

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
          onPress() {
            navigation.navigate('Main');
            dispatch(removePost(postId));
          },
          style: 'destructive',
        }
      ],
      { cancelable: false },
    );
  }

  if (!postItem) {
    return null;
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
  const toggleHandler = navigation.getParam('toggleHandler');

  const iconName = booked ? 'ios-star' : 'ios-star-outline';
  return {
    headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Take photo'
          iconName={iconName}
          onPress={toggleHandler}
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