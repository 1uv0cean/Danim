
import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Main from './Main';


const TabNavigator =
    createBottomTabNavigator({
        현재위치: {
            screen: Main,
        },
        예약내역: {
            screen: Main,
        },
        즐겨찾기: {
            screen: Main,
        },
        내정보: {
            screen: Main,
        },
    },

        {
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarIcon: ({ horizontal, tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName = 'environment';
                    if (routeName === '현재위치') {
                        iconName = 'enviroment';
                    } else if (routeName === '예약내역') {
                        iconName = 'profile';
                    } else if (routeName === '즐겨찾기') {
                        iconName = 'heart';
                    } else if (routeName === '내정보') {
                        iconName = 'user';
                    }
                    return (
                        <AntDesign
                            name={iconName}
                            size={horizontal ? 30 : 30}
                            color={tintColor}
                        />
                    );

                },
            }),
        },
    );
export default createAppContainer(TabNavigator);
