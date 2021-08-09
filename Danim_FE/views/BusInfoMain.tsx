import React from 'react';
import { Button } from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Info1 from './BusInfo1';
import Info2 from './BusInfo2';

const topNavitgator = createMaterialTopTabNavigator(
  {
    여의도환승센터방면: {screen: Info1},
    경원여객방면: {screen: Info2},
  },
  {
    tabBarOptions: {
      activeTintColor: '#2C3E50',
      inactiveTintColor: '#8f9499',
      style: {
        backgroundColor: '#FFFFFF',
      },
      indicatorStyle: {
        borderBottomColor: '#2C3E50',
        borderBottomWidth: 3,
      },
    },
  },
);

const AppContainer = createAppContainer(topNavitgator);

const busInfoMain = () => {
    return( 
      <>
        <AppContainer></AppContainer>
      </>
    );
};

export default busInfoMain
