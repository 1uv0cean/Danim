import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>다님</Text>
    </View>
  );
}

export default App;