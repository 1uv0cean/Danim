import React from 'react';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';
import StationSearchBar from '../components/main/StationSearchBar';
import {View} from 'react-native';

type SearchScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.Main
>;

export type SearchParams = {
  symbol: string; // DetailsScreen 에는 symbol 이라는 이름의 string 타입의 파라미터가 필요하다.
};

interface SearchScreenProps {
  route: {params: SearchParams}; // 루트의 파라미터로 방금 지정해준 DetailsParams 타입이 온다.
  navigation: SearchScreenNavigationProps;
}

const SearchStation: React.FunctionComponent<SearchScreenProps> = () => {
  return (
    <>
      <View>
        <StationSearchBar />
      </View>
    </>
  );
};

export default SearchStation;
