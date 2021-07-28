import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import HomeStackNavigatoer from './navigators/index';
import {NavigationContainer} from '@react-navigation/native';

interface Props {}

const App = ({}: Props) => {
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
};

export default App;
