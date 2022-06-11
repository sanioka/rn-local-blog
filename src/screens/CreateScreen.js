import React, { useState, useRef } from 'react';

import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from 'react-redux';

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { addPost } from "../store/actions/postActions";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('')

  /**
   * useRef is optimisation to avoid re-render, implemented here just to learn how to use it
   *
   * For current case its better to use useState() instead of useRef(),
   * because we need to add this variable to validate 'Create Post' 'disabled' prop
   */
  const imgRef = useRef();

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgRef.current,
      booked: false,
    }

    dispatch(addPost(post));
    navigation.navigate('Main');
  }

  const photoPickHandler = uri => {
    imgRef.current = uri;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
          <View>
            <PhotoPicker onPick={photoPickHandler}/>
            <TextInput
              style={styles.textarea}
              placeholder='Input multiline text here'
              value={text}
              onChangeText={setText}
              multiline
              autoCorrect={false}
              autoCapitalize='none'
              enablesReturnKeyAutomatically={true}
              maxLength={140}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title='Create post'
          color={THEME.MAIN_COLOR}
          onPress={createPostHandler}
          disabled={!text}
        />
      </View>
    </View>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Create new post',
  // headerRight: () => (
  //   <Button
  //     onPress={() => alert('This is a button!')}
  //     title="Done"
  //     color={THEME.MAIN_COLOR}
  //     disabled={true}
  //   />
  // ),
  // headerLeft: () => (
  //   <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
  //     <Item
  //       title='Toggle drawer'
  //       iconName='ios-menu'
  //       onPress={() => {
  //         navigation.toggleDrawer();
  //       }}
  //     />
  //   </HeaderButtons>
  // ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  textarea: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 16,
  },
})