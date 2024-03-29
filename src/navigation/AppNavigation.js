import React from 'react';
import { Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from "react-navigation-drawer";

import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

import { THEME } from "../theme";

const navigatorStackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR,
    },
    headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
  }
};

const PostNavigator = createStackNavigator({
  Main: MainScreen, // first record is initialRouteName
  Post: {
    screen: PostScreen,
  },
  Create: {
    screen: CreateScreen,
    navigationOptions: {
      headerBackTitleVisible: false,
    },
  },
}, navigatorStackConfig)

const BookedNavigator = createStackNavigator({
  Booked: BookedScreen, // first record is initialRouteName
  Post: PostScreen,
}, navigatorStackConfig)

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'All',
      tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor}/>
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor}/>
    }
  }
};

const BottomNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(bottomTabsConfig, {
    activeTintColor: '#fff',
    shifting: true,
    barStyle: {
      backgroundColor: THEME.MAIN_COLOR,
    }
  })
  : createBottomTabNavigator(bottomTabsConfig, {
  tabBarOptions: {
    activeTintColor: THEME.MAIN_COLOR,
  }
})

const AboutNavigator = createStackNavigator({
  About: AboutScreen,
}, navigatorStackConfig)

// const CreateNavigator = createStackNavigator({
//   Create: CreateScreen,
// }, navigatorStackConfig)

const MainNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
    navigationOptions: {
      drawerLabel: 'Main',
      // drawerIcon: <Ionicons name={'star'}/>
    }
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: 'About',
    }
  },
  // Create: {
  //   screen: CreateNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Create post',
  //   }
  // }
}, {
  contentOptions: {
    activeTintColor: THEME.MAIN_COLOR,
    labelStyle: {
      fontFamily: 'open-bold',
    }
  },
  edgeWidth: 0, // disable drawer gestures at all if needed, because drawerLockMode 'locked-closed' doesnt work correctly
  hideStatusBar: true,
})

export const AppNavigation = createAppContainer(MainNavigator);