import React, { useState } from 'react';
import { StyleSheet, View, Image, Button, Alert, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Octicons, Ionicons } from '@expo/vector-icons';

import { THEME } from '../theme';

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null);

  const [cameraStatus, requestCameraPermission] = ImagePicker.useCameraPermissions();
  const [mediaStatus, requestMediaPermission] = ImagePicker.useMediaLibraryPermissions();

  const takePhotoFromCamera = async () => {
    const cameraPermissions = await requestCameraPermission();

    if (!cameraPermissions.granted) {
      Alert.alert('No camera permissions. Please change it from Phone > Settings.');
      return;
    }

    const imgData = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    })

    if (!imgData.cancelled) {
      setImage(imgData.uri);
      onPick(imgData.uri);
    }
  }

  const takePhotoFromLibrary = async () => {
    const mediaPermissions = await requestMediaPermission();

    if (!mediaPermissions.granted) {
      Alert.alert('No media library permissions. Please change it from Phone > Settings.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 0.7,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      onPick(result.uri);
    }
  }

  return (
    <View style={styles.wrapper}>

      {image &&
        <View>
          <Image style={styles.image} source={{uri: image}}/>
          <View style={styles.deletePhotoContainer}>
            <TouchableOpacity onPress={() => setImage(null)}>
              <Ionicons name="close-circle-outline" size={40} color={'white'}/>
            </TouchableOpacity>
          </View>
        </View>}

      {!image &&
        <View style={{...styles.image, ...styles.noImageContainer}}>
          <Octicons name='image' size={64} color='#cfcfcf'/>

          <View style={styles.takePhotoContainer}>
            <TouchableOpacity onPress={takePhotoFromLibrary}>
              <Ionicons name="image" size={40} color={THEME.MAIN_COLOR}/>
            </TouchableOpacity>

            <Text>&nbsp;/&nbsp;</Text>

            <TouchableOpacity onPress={takePhotoFromCamera}>
              <Ionicons name="ios-camera" size={42} color={THEME.MAIN_COLOR}/>
            </TouchableOpacity>
          </View>
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    // marginTop: 10,
    borderRadius: 5,
  },
  noImageContainer: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  takePhotoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 0,
    right: 5,
    opacity: 0.75,
  },
  deletePhotoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    // paddingTop: 10,
  }
})