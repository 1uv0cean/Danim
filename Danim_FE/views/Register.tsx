import React from 'react';
import { Text, SafeAreaView, Button, Alert } from 'react-native';
import CertificationInput from '../components/register/CertificationInput'
import NameInput from '../components/register/NameInput'
import PhoneInput from '../components/register/PhoneInput'
import {
    HomeScreens,
    HomeStackParamList,
} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';

const EmptyView = styled.View`
  flex: 0.05;
`;

const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

type RegisterScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.Register
>;

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProps;
  }

const Register: React.FunctionComponent<RegisterScreenProps> = (props) =>{
    const {navigation} = props;
    return (
        <Container>
            <Text>이름</Text>
            <NameInput />
            <EmptyView />
            <Text>휴대폰 번호</Text>
            <PhoneInput />
            <EmptyView />
            <Button onPress={() =>
                Alert.alert("회원정보 확인","눌렀네!!!")} 
                color = "#2C3E50"
                title = "회원정보 확인"
            />
            <EmptyView />
            <Button onPress={() =>
                Alert.alert("인증번호 전송","얍!")}
                color = "#2C3E50"                
                title = "인증번호 전송"
            />
            <EmptyView />
            <Text>인증번호</Text>
            <CertificationInput />
            <Button onPress={() =>
                Alert.alert("확인","고양이!")}
                color = "#2C3E50"                
                title = "확인"
            />
            <EmptyView />
            <Text>장애인 증명서</Text>
            <EmptyView /><EmptyView /><EmptyView /><EmptyView />
            <Text>                                 사진 들어갈 공간~~</Text>
            <EmptyView /><EmptyView /><EmptyView /><EmptyView />
            <Button onPress={() =>
                Alert.alert("확인","고양이!")}
                color = "#2C3E50"                
                title = "첨부"
            />
            <Text>관리자가 회원가입을 승인할 때까지 앱 사용이 제한됩니다.</Text>
            <EmptyView /><EmptyView /><EmptyView />
            <Button onPress={() =>
                navigation.navigate(HomeScreens.RegisterWait)} 
                color = "#2C3E50"
                title = "완료"
            />
        </Container>
    );
}
    
export default Register
