import React, {Component, useState} from 'react';
import {Text, Button, Alert, Image, Platform, ImageBackground, View} from 'react-native';
import CertificationInput from '../components/register/CertificationInput';
import NameInput from '../components/register/NameInput';
import PhoneInput from '../components/register/PhoneInput';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {funcRegister} from '../function/funcRegister';
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-crop-picker';
//import ImagePicker from 'react-native-image-picker';
//import { launchImageLibrary } from 'react-native-image-picker';

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

const Register: React.FunctionComponent<RegisterScreenProps> = props => {
  const {navigation} = props;
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');

  // author : 차민재
  // username 입력 시 값 바인딩
  const setterUserName = (value: string) => {
    setUserName(value);
  };

  // userphone 입력 시 값 바인딩
  const setterUserPhone = (value: string) => {
    setUserPhone(value);
  };

  // doRegister
  const doRegister = async () => {
    try {
      // 데이터 검증 단계
      if (userName !== '' && userPhone !== '') {
        let getRegisterResult = await funcRegister({userName, userPhone});
        if (getRegisterResult) {
          Alert.alert('회원가입 성공');
          navigation.navigate(HomeScreens.RegisterWait);
        } else {
          Alert.alert('오류 발생');
        }
      } else {
        Alert.alert('정보를 입력해주세요.');
      }
    } catch (e) {
      Alert.alert('오류 발생');
    }
  };
  
  const [imgPath, setImgPath] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');

  return (
    <Container>
      <Text>이름</Text>
      <NameInput setterUserName={setterUserName} />
      <EmptyView />
      <Text>휴대폰 번호</Text>
      <PhoneInput setterUserPhone={setterUserPhone} />
      <EmptyView />
      <Button
        onPress={() => Alert.alert('회원정보 확인', '눌렀네!!!')}
        color="#2C3E50"
        title="회원정보 확인"
      />
      <EmptyView />
      <Button
        onPress={() => Alert.alert('인증번호 전송', '얍!')}
        color="#2C3E50"
        title="인증번호 전송"
      />
      <EmptyView />
      <Text>인증번호</Text>
      <CertificationInput />
      <Button
        onPress={() => Alert.alert('확인', '고양이!')}
        color="#2C3E50"
        title="확인"
      />
      <EmptyView />
      <Text>장애인 증명서</Text>
      <EmptyView />
      <EmptyView />
      <EmptyView />
      <EmptyView />
      <View
        style={{alignItems: 'center'}}>
        <ImageBackground
          source={{uri:imgPath}}
          style={{width: 200, height: 100, alignItems: 'center'}}
          imageStyle={{borderRadius: 10}} 
        />
      </View>
      <EmptyView />
      <EmptyView />
      <EmptyView />
      <EmptyView />
      <Button
        onPress={() => 
          {
            console.log('사진 선택하기')
            ImagePicker.openPicker({
              path: 'my-file-path.jpg',
              width: 400,
              height: 300,
              cropping: true
            }).then(image => {
              setImgPath(image.path);
              console.log("사진!!!!: " + imgPath);              
            });
          }
        }
        color="#2C3E50"
        title="첨부"
      />
      <Text>관리자가 회원가입을 승인할 때까지 앱 사용이 제한됩니다.</Text>
      <EmptyView />
      <EmptyView />
      <EmptyView />
      <Button onPress={doRegister} color="#2C3E50" title="완료" />
    </Container>
  );
};

export default Register;
