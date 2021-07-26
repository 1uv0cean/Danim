import * as React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.Button`
  justify-content: center;
`;

const LoginButton = () => {
    return (
        <Button onPress={() =>{
            Alert.alert('버튼을 누르셨네요!');
            }}
        color = "#2C3E50"
        title = "로그인"
        />
    );
}

export default LoginButton;

        