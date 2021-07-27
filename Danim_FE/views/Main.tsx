import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import {
    HomeScreens,
    HomeStackParamList,
} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';

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

const Main: React.FunctionComponent<MainScreenProps> = (props) =>{
    const {route} = props;
    const {params} = route;
    const {symbol} = params;
    return (
        <SafeAreaView>
            <Text>메인페이지입니당당당</Text>
            <Text>{symbol}</Text>
        </SafeAreaView>
    );
}
    
export default Main
