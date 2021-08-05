import React, {useState} from 'react';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import PhoneNumInput from '../components/editprofile/PhoneNumInput';
import NumInput from '../components/editprofile/NumInput';
import {funcPostSMS} from '../function/funcSendChangeSMS';
import {funcChangePhone} from '../function/funcChangePhone';

type EditProfileScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.EditProfile
>;

interface EditProfileScreenProps {
  navigation: EditProfileScreenNavigationProps;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
  },
  idView: {
    flex: 1,
  },
  phoneNumChangeView: {
    flex: 3,
    width: '78%',
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 5,
    paddingBottom: 20,
  },
  buttonView: {
    flex: 1,
    marginTop: 20,
  },
  idText: {
    margin: 15,
    marginBottom: 0,
    fontSize: 35,
    fontWeight: 'bold',
  },
  hiText: {
    margin: 15,
    marginTop: 0,
    fontSize: 20,
  },
  updateButton: {
    backgroundColor: '#2C3E50',
    width: '78%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#3f3f3f',
    fontSize: 13,
    fontWeight: 'bold',
  },
  numCheckButton: {
    backgroundColor: '#D3D3D3',
    width: '85%',
    alignSelf: 'center',
    marginTop: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 19,
    alignSelf: 'center',
    margin: 25,
  },
  subtitleText: {
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 25,
    marginTop: 10,
  },
});

const EditProfile: React.FunctionComponent<EditProfileScreenProps> = ({
  route,
}: any) => {
  // 사용자 전화번호 가져오기
  const {userPhone} = route.params;

  const [chngUserPhone, setChngUserPhone] = useState<string>('');
  const [authNumber, setAuthNumber] = useState<string>('');
  const [userAuthNumber, setUserAuthNumber] = useState<string>('');

  const setUserPhone = (value: string) => {
    setChngUserPhone(value);
  };

  const setUserAuth = (value: string) => {
    setUserAuthNumber(value);
  };

  const doSendSMS = async () => {
    try {
      // input 값 바인딩 여부 확인
      if (chngUserPhone === '') {
        // 아무런 값이 없을 때
        Alert.alert('변경 할 전화번호를 입력하세요');
      } else {
        // 값이 있을 때
        let getResult = await funcPostSMS({chngUserPhone});
        if (getResult) {
          Alert.alert('인증 번호가 전송되었습니다.');
          setAuthNumber(getResult);
        } else {
          Alert.alert('오류 발생');
        }
      }
    } catch (e) {
      Alert.alert('오류 발생');
    }
  };

  const doCheckAuth = () => {
    // eslint-disable-next-line eqeqeq
    if (authNumber == userAuthNumber) {
      Alert.alert('인증번호 확인 완료');
    } else {
      Alert.alert('인증번호를 확인해주세요');
    }
  };

  const doUpdate = async () => {
    try {
      let getResult = await funcChangePhone({chngUserPhone}, {userPhone});
      if (getResult) {
        Alert.alert('변경 완료');
      } else {
        Alert.alert('변경 오류 발생');
      }
    } catch (e) {
      Alert.alert('오류 발생');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.idView}>
        <Text style={styles.idText}>{userPhone}</Text>
        <Text style={styles.hiText}>안녕하세요!</Text>
      </View>
      <View style={styles.phoneNumChangeView}>
        <Text style={styles.titleText}>휴대폰번호 수정</Text>
        <Text style={styles.subtitleText}>바뀐 휴대폰번호</Text>
        <PhoneNumInput setUserPhone={setUserPhone} />
        <Button style={styles.numCheckButton} onPress={doSendSMS}>
          <Text style={styles.buttonText2}>인증번호 요청</Text>
        </Button>
        <Text style={styles.subtitleText}>인증번호</Text>
        <NumInput setUserAuth={setUserAuth} />
        <Button style={styles.numCheckButton} onPress={doCheckAuth}>
          <Text style={styles.buttonText2}>확인</Text>
        </Button>
      </View>
      <View style={styles.buttonView}>
        <Button style={styles.updateButton} onPress={doUpdate}>
          <Text style={styles.buttonText}>수정</Text>
        </Button>
      </View>
    </View>
  );
};

export default EditProfile;
