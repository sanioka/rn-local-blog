import React from 'react';

import { FlatList, StyleSheet, View, Text, Button } from "react-native";
import { Post } from "./Post";

export const PostList = ({data = [], onOpen}) => {
  if (!data.length) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.listContainer}
        data={data}
        contentContainerStyle={{ paddingBottom: 16 }}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'open-regular',
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 10,
  }
})