import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login'; 
import Main, {MainParams} from '../views/Main'; 
import Register from '../views/Register'

export enum HomeScreens {
  Login = 'Login',
  Main = 'Main',
  Register = 'Register',
}


export type HomeStackParamList = {
  Login: undefined; 
  Main: MainParams; 
  Register: undefined;
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
        component={Main} 
      />
      <HomeStack.Screen 
        name={HomeScreens.Register} 
        component={Register} 
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;