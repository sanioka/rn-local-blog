import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/postActions";
import { THEME } from "../theme";

import { MOCK_DATA } from '../mock-data/data';
import { DB } from "../service/db.service";

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

  // getter state from redux
  const allPosts = useSelector(state => state.post.allPosts);
  const isLoading = useSelector(state => state.post.loading);

  async function loadMockPosts() {
    await DB.createPostsFromList(MOCK_DATA);
    dispatch(loadPosts());
  }

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR}/>
      </View>
    )
  }

  if (!allPosts.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>No any posts, please add it manually</Text>
        <Text style={styles.text}>or</Text>
        <View style={{width: '50%'}}>
          <Button title='load mock data' onPress={loadMockPosts}/>
        </View>
      </View>
    )
  }

  return <PostList data={allPosts} onOpen={openPostHandler}/>;
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Local Blog App',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='create-outline'
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
  },
  postContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-regular',
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 5,
  }
})