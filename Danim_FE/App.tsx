import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import styled from 'styled-components/native';
import LoginCheckBox from './components/LoginPage/LoginCheckbox';
import LoginButton from './components/LoginPage/LoginButton';
import PhoneInput from './components/LoginPage/PhoneInput';
import PageName from './components/PageName';

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const LoginView = styled.View`
  flex-direction: row;
  height: 40;
  justify-content: center;
`;

const CheckBoxView = styled.View`
  flex-direction: row;
  height: 40;
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
      <PageName/>
      <LoginView>
        <PhoneInput/>
        <LoginButton/>
      </LoginView>
      <CheckBoxView>
        <LoginCheckBox/>
        <MainText>자동 로그인</MainText>
      </CheckBoxView>
    </Container>
      

    
    
  );
}

export default App;