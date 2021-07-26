import React, {useEffect, useState} from 'react';
import {View, Alert,Button, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const LoginView = styled.View`
  flex-direction: row;
  height: 40;
  justify-content: center;
`;

const PhoneInput = styled.TextInput`
  border-color: gray;
  border-width: 1;
  justify-content: center;
`;

const LoginButton = styled.Button`
  justify-content: center;
`;

const CheckBoxView = styled.View`
  flex-direction: row;
  height: 30;
  justify-content: center;
`;

const MainText = styled.Text`
  text-align: left;
  margin : 8px;
  color: black;
  justify-content: center;
`;



interface Props {}

const App = ({ }:Props) => {
  
  
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Container>
      <LoginView>
        <PhoneInput
          placeholder="휴대폰 번호   예)01012345678 "
          keyboardType="numeric"
          placeholderTextColor="#2C3E50"
        />
        <LoginButton onPress={() =>{
            Alert.alert('버튼을 누르셨네요!');
          }}
          color = "#2C3E50"
          title = "로그인"
          />
      </LoginView>
      <CheckBoxView>
        <Checkbox 
          status= "checked"
          color = "#2C3E50"
        />
        <MainText>다님</MainText>
      </CheckBoxView>
    </Container>
      

    
    
  );
}

export default App;