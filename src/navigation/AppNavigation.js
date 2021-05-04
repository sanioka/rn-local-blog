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
import { THEME } from "../theme";

import { BookedScreen } from "../screens/BookedScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { CreateScreen } from "../screens/CreateScreen";

const navigatorStackConfig = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '#fff' : THEME.MAIN_COLOR,
    },
    headerTintColor: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
  }
};

const PostNavigator = createStackNavigator({
  Main: MainScreen,
  Post: {
    screen: PostScreen,
  }
}, navigatorStackConfig)

const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
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

const CreateNavigator = createStackNavigator({
  Create: CreateScreen,
}, navigatorStackConfig)

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
      drawerLabel: 'About App',
    }
  },
  Create: {
    screen: CreateNavigator,
    navigationOptions: {
      drawerLabel: 'Create post',
    }
  }
}, {
  contentOptions: {
    activeTintColor: THEME.MAIN_COLOR,
    labelStyle: {
      fontFamily: 'open-bold',
    }
  }
})

export const AppNavigation = createAppContainer(MainNavigator);