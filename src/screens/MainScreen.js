import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/postActions";
import { THEME } from "../theme";


export const MainScreen = ({ navigation }) => {
  const openPostHandler = postItem => {
    navigation.navigate('Post', {
      postId: postItem.id,
      date: postItem.date,
      booked: postItem.booked,
    });
  }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch])

  const allPosts = useSelector(state => state.post.allPosts);
  const isLoading = useSelector(state => state.post.loading);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR}/>
      </View>
    )
  }

  return <PostList data={allPosts} onOpen={openPostHandler}/>
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'My blog',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => {
          navigation.push('Create');
        }}
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


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})