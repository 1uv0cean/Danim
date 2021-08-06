import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import BusSearchBar from './SearchBus';
import StationSearchBar from './SearchStation';

const topNavitgator = createMaterialTopTabNavigator(
  {
    버스: {screen: BusSearchBar},
    정류장: {screen: StationSearchBar},
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

export default class Favorites extends Component {
  render() {
    return <AppContainer></AppContainer>;
  }
}
