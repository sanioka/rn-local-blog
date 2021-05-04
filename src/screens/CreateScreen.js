import React, { useState } from 'react';

import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from 'react-redux';

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { addPost } from "../store/actions/postActions";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch();

  const imgMockUrl = 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg';

  const createPostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img: imgMockUrl,
      booked: false,
    }

    dispatch(addPost(post));
    navigation.navigate('Main');
  }

  return (
    <ScrollView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View>
          <Text style={styles.title}>Create new post</Text>
          <TextInput
            style={styles.textarea}
            placeholder='Input text here'
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            style={styles.image}
            source={{uri: imgMockUrl}}/>
          <Button title='Create post' color={THEME.MAIN_COLOR} onPress={createPostHandler}/>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Create',
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
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  }
})