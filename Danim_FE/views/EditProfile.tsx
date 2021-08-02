import React from 'react';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
<<<<<<< HEAD
import PhoneNumInput from '../components/EditProfile/PhoneNumInput';
import NumInput from '../components/EditProfile/NumInput';
=======
import PhoneNumInput from '../components/editProfile/PhoneNumInput';
import NumInput from '../components/editProfile/NumInput';
>>>>>>> b87d61256ea4a31ebcf8456ff89d84e5da211a15

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
  const {userPhone} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.idView}>
        <Text style={styles.idText}>{userPhone}</Text>
        <Text style={styles.hiText}>안녕하세요!</Text>
      </View>
      <View style={styles.phoneNumChangeView}>
        <Text style={styles.titleText}>휴대폰번호 수정</Text>
        <Text style={styles.subtitleText}>바뀐 휴대폰번호</Text>
        <PhoneNumInput />
        <Button style={styles.numCheckButton}>
          <Text style={styles.buttonText2}>인증번호 요청</Text>
        </Button>
        <Text style={styles.subtitleText}>인증번호</Text>
        <NumInput />
        <Button style={styles.numCheckButton}>
          <Text style={styles.buttonText2}>확인</Text>
        </Button>
      </View>
      <View style={styles.buttonView}>
        <Button style={styles.updateButton}>
          <Text style={styles.buttonText}>수정</Text>
        </Button>
      </View>
    </View>
  );
};

export default EditProfile;
