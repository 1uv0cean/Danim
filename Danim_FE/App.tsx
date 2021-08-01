import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './navigators/index';

interface Props {}

const App = ({}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  }, []);
  return (
    <Navigator />
  );
};

export default App;
