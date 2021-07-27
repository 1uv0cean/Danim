import React from 'react';
import {
    HomeScreens,
    HomeStackParamList,
} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';
import GoogleMap from '../components/Main/GoogleMap';
import SearchBar from '../components/Main/SearchBar';
import { View } from 'react-native';

type MainScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.Main
>;

export type MainParams = {
    symbol: string; // DetailsScreen 에는 symbol 이라는 이름의 string 타입의 파라미터가 필요하다.
};

interface MainScreenProps {
    route: {params: MainParams}; // 루트의 파라미터로 방금 지정해준 DetailsParams 타입이 온다.
    navigation: MainScreenNavigationProps;
  }

const Main: React.FunctionComponent<MainScreenProps> = () =>{
    return (
        <GoogleMap />
    );
}
    
export default Main
