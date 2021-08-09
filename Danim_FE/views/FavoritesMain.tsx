import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Bus from './FavoritesBus';
import Station from './FavoritesStation';

const topNavitgator = createMaterialTopTabNavigator(
  {
    버스: {screen: Bus},
    정류장: {screen: Station},
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

const Favorites = () => {
  return <AppContainer></AppContainer>;
};

export default Favorites;
