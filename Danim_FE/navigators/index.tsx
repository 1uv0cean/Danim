import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import Main, {MainParams} from '../views/Main';
import Register from '../views/Register';
import RegisterWait from '../views/RegisterWait';
import MyPage from '../views/Mypage';

export enum HomeScreens {
  Login = 'Login',
  Main = 'Main',
  Register = 'Register',
  RegisterWait = 'RegisterWait',
  MyPage = "MyPage",
}

export type HomeStackParamList = {
  Login: undefined;
  Main: MainParams;
  Register: undefined;
  RegisterWait: undefined;
  MyPage: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();
const HomeStackNavigator: React.FunctionComponent = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={HomeScreens.Login} component={Login} />
      <HomeStack.Screen name={HomeScreens.Main} component={Main} />
      <HomeStack.Screen name={HomeScreens.Register} component={Register} />
      <HomeStack.Screen
        name={HomeScreens.RegisterWait}
        component={RegisterWait}
      />
       <HomeStack.Screen name={HomeScreens.MyPage} component={MyPage} />
    </HomeStack.Navigator>
  );
};
export default HomeStackNavigator;
