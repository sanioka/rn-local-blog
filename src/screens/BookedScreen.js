import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = postItem => {
    navigation.navigate('Post', {
      postId: postItem.id,
      date: postItem.date,
      booked: postItem.booked,
    });
  }

  const bookedPosts = useSelector(state => state.post.bookedPosts);

  const warning = <View style={styles.warning}>
    <Text style={{textAlign: 'right'}}>⚠️ This createBottomTabNavigator is UX unfriendly,{'\n'} but used for educational purposes only</Text>
  </View>

  if (!bookedPosts.length) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>No any booked posts</Text>
        {warning}
      </View>
    )
  }

  return (
    <View style={{flex: 1}}>
      <PostList data={bookedPosts} onOpen={openPostHandler}/>
      {warning}
    </View>
  )
};

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Favorites',
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
  },
  warning: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  text: {
    fontFamily: 'open-regular',
    textAlign: 'center',
    fontSize: 16,
  }
})