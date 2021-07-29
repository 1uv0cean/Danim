import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HomeStackNavigatoer from './navigators/index';
import {NavigationContainer} from '@react-navigation/native';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Main from './views/Main';

/*
interface Props {}

const App = ({ }:Props) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
    <HomeStackNavigatoer />
  </NavigationContainer>
  );
}

export default App; */


const TabNavigator = 
  createBottomTabNavigator({
  현재위치: {
    screen: Main,
  },
  예약내역: {
    screen: Main,
  },
  즐겨찾기: {
    screen: Main,
  },
  내정보: {
    screen: Main,
  },
},

{
  defaultNavigationOptions: ({navigation}) => ({
  tabBarIcon: ({horizontal, tintColor}) => {
    const {routeName} = navigation.state;
    let iconName;
    if (routeName === '현재위치') {
      iconName = 'enviroment';
    } else if (routeName === '예약내역') {
      iconName = 'profile';
    } else if (routeName === '즐겨찾기') {
      iconName = 'heart';
    } else if (routeName === '내정보') {
      iconName = 'user';
    }
    return (
      <NavigationContainer>
      <HomeStackNavigatoer />
      <AntDesign
        name={iconName}
        size={horizontal ? 30 : 30}
        color={tintColor}
      />
      </NavigationContainer>
  );
      
  },
}),
},
);
export default createAppContainer(TabNavigator);
