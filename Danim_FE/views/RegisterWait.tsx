import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';

type RegisterWaitScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.RegisterWait
>;

interface RegisterWaitScreenProps {
  navigation: RegisterWaitScreenNavigationProps;
}

const RegisterWait: React.FunctionComponent<RegisterWaitScreenProps> = () => {
  return (
    <SafeAreaView>
      <Text>승인 대기중입니다</Text>
    </SafeAreaView>
  );
};

export default RegisterWait;
