import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import {
    HomeScreens,
    HomeStackParamList,
} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';

type RegisterScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.Register
>;

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProps;
  }

const Register: React.FunctionComponent<RegisterScreenProps> = () =>{
    return (
        <SafeAreaView>
            <Text>회원가입 페이지다.</Text>
        </SafeAreaView>
    );
}
    
export default Register
