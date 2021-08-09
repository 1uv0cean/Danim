import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import BusInfoTitle from '../components/busInfo/BusInfoTitle';
import Info1 from './BusInfo1';
import Info2 from './BusInfo2';
import GoToReservationButoon from '../components/busInfo/GoToReservationButton';

const topNavitgator = createMaterialTopTabNavigator(
  {
    문래동방면: {
      screen: Info1,
    },
    양재동방면: {screen: Info2},
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

// type RouteMapScreenNavigationProps = StackNavigationProp<
//   HomeStackParamList,
//   HomeScreens.RouteMap
// >;

interface RouteMapScreenProps {
  // navigation: RouteMapScreenNavigationProps;
  route: any;
}

const AppContainer = createAppContainer(topNavitgator);

const busInfoMain: React.FunctionComponent<RouteMapScreenProps> = props => {
  const busNumber = props.route.params.busNumber;
  console.log('BUSNUMBER main : ', busNumber);
  return (
    <>
      <BusInfoTitle />
      <AppContainer></AppContainer>
      <GoToReservationButoon />
    </>
  );
};

export default busInfoMain;
