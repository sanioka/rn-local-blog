import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

import { DATA } from '../data';

export const MainScreen = ({ navigation }) => {
  const openPostHandler = postItem => {
    navigation.navigate('Post', {
      postId: postItem.id,
      date: postItem.date,
      booked: postItem.booked,
    });
  }
  return <PostList data={DATA} onOpen={openPostHandler}/>
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'My blog',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => console.log('press photo')}
      />
    </HeaderButtons>
 ),
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