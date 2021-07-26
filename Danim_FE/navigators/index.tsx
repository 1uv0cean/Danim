import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login'; 
import Main, {MainParams} from '../views/Main'; 

export enum HomeScreens {
  Login = 'Login',
  Main = 'Main',
}


export type HomeStackParamList = {
  Login: undefined; 
  Main: MainParams; 
};

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeStackNavigator: React.FunctionComponent = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HomeScreens.Login}
        component={Login} 
      />
      <HomeStack.Screen 
        name={HomeScreens.Main} 
        component={Main} />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;