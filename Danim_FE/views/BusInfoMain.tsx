import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import BusInfoTitle from '../components/busInfo/BusInfoTitle';
import Info1 from './BusInfo1';
import Info2 from './BusInfo2';
import GoToReservationButoon from '../components/busInfo/GoToReservationButton';

const topNavitgator = createMaterialTopTabNavigator(
  {
    여의도환승센터방면: {screen: Info1},
    경원여객방면: {screen: Info2},
  },
  {
    tabBarOptions: {
      activeTintColor: '#222324',
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
        <BusInfoTitle/>
        <AppContainer></AppContainer>
        <GoToReservationButoon/>
      </>
    );
};

export default busInfoMain
