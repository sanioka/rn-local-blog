import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

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

  return <PostList data={bookedPosts} onOpen={openPostHandler}/>

};

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Booked',
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