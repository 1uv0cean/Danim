import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import Main from '../views/Main';
import Register from '../views/Register';
import RegisterWait from '../views/RegisterWait';
import MyPage from '../views/Mypage';
import EditProfile from '../views/EditProfile';
import EditRegistration from '../views/EditRegistration';
import WriteReview from '../views/WriteReview';

export enum HomeScreens {
  Login = 'Login',
  Main = 'Main',
  Register = 'Register',
  RegisterWait = 'RegisterWait',
  MyPage = 'MyPage',
  EditProfile = 'EditProfile',
  EditRegistration = 'EditRegistration',
  WriteReview = 'WriteReview',
  TabNavigator='TabNavigator',
}

export type HomeStackParamList = {
  Login: undefined;
  Main: undefined;
  Register: undefined;
  RegisterWait: undefined;
  MyPage: undefined;
  EditProfile: undefined;
  EditRegistration: undefined;
  WriteReview: undefined;
  TabNavigator: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const Tab = createBottomTabNavigator();


const TabNavigator:React.FunctionComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = "";
          if (route.name === '현재위치') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === '예약내역') {
            iconName = focused ? 'time' : 'time-outline';
          } else if (route.name === '즐겨찾기') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === '내정보') {
            iconName = focused ? 'people' : 'people-outline';
          }
          return <Ionicons name={iconName} size={25} color={"#2C3E50"} />;
        }
      })}>
      <Tab.Screen name="현재위치" component={Main} />
      <Tab.Screen name="예약내역" component={Main} />
      <Tab.Screen name="즐겨찾기" component={Main} />
      <Tab.Screen name="내정보" component={MyPage} />
    </Tab.Navigator>
  );
}

const HomeStackNavigator: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name={HomeScreens.Login} component={Login} />
        <HomeStack.Screen name={HomeScreens.TabNavigator} component={TabNavigator} />
        <HomeStack.Screen name={HomeScreens.Main} component={Main} />
        <HomeStack.Screen name={HomeScreens.Register} component={Register} />
        <HomeStack.Screen name={HomeScreens.RegisterWait} component={RegisterWait} />
        <HomeStack.Screen name={HomeScreens.MyPage} component={MyPage} />
        <HomeStack.Screen name={HomeScreens.EditProfile} component={EditProfile} />
        <HomeStack.Screen name={HomeScreens.EditRegistration} component={EditRegistration} />
        <HomeStack.Screen name={HomeScreens.WriteReview} component={WriteReview} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator