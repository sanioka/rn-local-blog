import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

import { DATA } from '../data';

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = postItem => {
    navigation.navigate('Post', {
      postId: postItem.id,
      date: postItem.date,
      booked: postItem.booked,
    });
  }
  return <PostList data={DATA.filter(post => post.booked)} onOpen={openPostHandler}/>

};

BookedScreen.navigationOptions = {
  headerTitle: 'Booked',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle drawer'
        iconName='ios-menu'
        onPress={() => console.log('press photo')}
      />
    </HeaderButtons>
  ),
}