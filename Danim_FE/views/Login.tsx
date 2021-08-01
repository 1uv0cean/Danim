import React from 'react';
import styled from 'styled-components/native';
import LoginCheckBox from '../components/login/LoginCheckbox';
import PhoneInput from '../components/login/PhoneInput';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {useState} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import {funcLogin} from '../function/funcLogin';

type LoginScreenNavigationProps = StackNavigationProp<
  HomeStackParamList, // navigators/HomeStackNavigators/index.tsx 에서 지정했던 HomeStackParamList
  HomeScreens.Login // enum 으로 지정했던 타입 중 Main 에 해당하는 부분
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProps; // 네비게이션 속서에 대한 타입으로 방금 지정해주었던 MainScreenNavigationProps 을 지정
}

// 2021. 07. 28.
// author : 차민재
// 서버 테스트용 async
const fetchTest = async () => {
  try {
    const response = await axios.get('http://10.0.2.2:5000/api');
    console.log('responsedata : ', response.data);
    // data속에 담겨져 나온다.
  } catch (e) {
    console.log(e);
  }
};
// 서버 테스트용 async 끝

const EmptyView = styled.View`
  flex: 0.03;
`;

const LoginButton = styled.Button`
  justify-content: center;
  align-items: center;
`;

const RegisterButton = styled.Button`
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

const CheckBoxView = styled.View`
  flex-direction: row;
  height: 40px;
  margin-left: 67%;
`;

const MainText = styled.Text`
  text-align: left;
  margin: 8px;
  color: black;
  justify-content: center;
`;

const ServerButton = styled.Button`
  justify-content: center;
  align-items: center;
`;

//sm
//WriteReview 이동 버튼 
const SMButton = styled.Button`
   justify-content: center;
   align-items: center;
   `;

const Login: React.FunctionComponent<LoginScreenProps> = props => {
  const {navigation} = props;
  const [userPhone, setUserPhone] = useState<string>('');

  // author : 차민재
  // userphone 입력 시 값 바인딩
  const setterUserPhone = (value: string) => {
    setUserPhone(value);
  };

  // doLogin
  const doLogin = async () => {
    try {
      let getLoginResult = await funcLogin({userPhone});
      if (getLoginResult) {
        navigation.navigate(HomeScreens.TabNavigator);
      } else {
        Alert.alert('정보를 확인해주세요.');
      }
    } catch (e) {
      Alert.alert('오류 발생');
    }
  };

  return (
    <Container>
      <PhoneInput setterUserPhone={setterUserPhone} />
      <EmptyView />
      <LoginButton
        // onPress={() => navigation.navigate(HomeScreens.Main, {symbol})}
        onPress={doLogin}
        color="#2C3E50"
        title="로그인"
      />
      <EmptyView />
      <RegisterButton
        onPress={() => navigation.navigate(HomeScreens.Register)}
        color="#2C3E50"
        title="회원가입"
      />
      <EmptyView />
      <SMButton
        onPress={() => navigation.navigate(HomeScreens.WriteReview)}
        color="#2C3E50"
        title="WriteReview"
      />
      <CheckBoxView>
        <LoginCheckBox />
        <MainText>자동 로그인</MainText>
      </CheckBoxView>
      <ServerButton onPress={fetchTest} color="#2C3E50" title="서버테스트" />
    </Container>
  );
};

export default Login;
