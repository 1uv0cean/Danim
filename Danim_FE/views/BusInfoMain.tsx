import React, { useState } from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import BusInfoTitle from '../components/busInfo/BusInfoTitle';
import Info1 from './BusInfo1';
import Info2 from './BusInfo2';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeScreens, HomeStackParamList } from '../navigators';
import { funcGetSelBusStop } from '../function/funcGetSelBusStop';
import GoToReservationButton from '../components/busInfo/GoToReservationButton';

type BusInfoMainScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.BusInfoMain
>;

interface BusInfoMainScreenProps {
  navigation: BusInfoMainScreenNavigationProps;
  route: any;
}

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

export interface busNumberProps {
  busInfo: {busNumber: any}
}


const BusInfoMain: React.FunctionComponent<BusInfoMainScreenProps> = props => {
  const busNumber = props.route.params.busNumber;
  const [busInfo, setBusInfo] = useState<busNumberProps['busInfo']>({busNumber: busNumber});
  let getResult = funcGetSelBusStop({busNumber});

  
  return( 
      <>
        <BusInfoTitle {...busInfo} />
        <AppContainer></AppContainer>
        <GoToReservationButton/>
      </>
    );
};


export default BusInfoMain
