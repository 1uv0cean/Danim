import React, { Component } from 'react';
import styled from 'styled-components/native';
import LoginCheckBox from '../components/login/LoginCheckbox';
import PhoneInput from '../components/login/PhoneInput';
import {StackNavigationProp} from '@react-navigation/stack'
import {
    HomeScreens,
    HomeStackParamList,
  } from '../navigators/index';
import { useState } from 'react';

type LoginScreenNavigationProps = StackNavigationProp<
  HomeStackParamList, // navigators/HomeStackNavigators/index.tsx 에서 지정했던 HomeStackParamList
  HomeScreens.Login // enum 으로 지정했던 타입 중 Main 에 해당하는 부분
>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProps; // 네비게이션 속서에 대한 타입으로 방금 지정해주었던 MainScreenNavigationProps 을 지정
  }

const Button = styled.Button`
  justify-content: center;
`;

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const LoginView = styled.View`
  flex-direction: row;
  height: 40px;
  justify-content: center;
`;

const CheckBoxView = styled.View`
  flex-direction: row;
  height: 40px;
  justify-content: center;
`;

const MainText = styled.Text`
  text-align: left;
  margin : 8px;
  color: black;
  justify-content: center;
`;

const Login: React.FunctionComponent<LoginScreenProps> = (props) => {
    const {navigation} = props;
    const initialSymbol: string = 'Danim';
    const [symbol, setSymbol] = useState<string>(initialSymbol);
    return (
        <Container>
        <LoginView>
            <PhoneInput/>
            <Button onPress={() =>
            navigation.navigate(HomeScreens.Main,{symbol})} 
            color = "#2C3E50"
            title = "로그인"
            />
        </LoginView>
        <CheckBoxView>
            <LoginCheckBox/>
            <MainText>자동 로그인</MainText>
        </CheckBoxView>
        </Container> 
    );
}

export default Login