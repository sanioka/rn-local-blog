import React from 'react';

import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from "react-native";

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: post.img}}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{new Date(post.date).toLocaleDateString()}</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.titleContainer}>{post.text.split('\n')[0].slice(0, 64)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    overflow: 'hidden',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  dateContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    position: 'absolute',
    bottom: 0,
  },
  date: {
    color: '#fff',
    fontFamily: 'open-regular',
  },
  titleContainer: {
    color: '#000',
    fontSize: 16,
    paddingVertical: 5,
  },
})