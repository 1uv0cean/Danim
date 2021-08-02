import React from 'react';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import RegistrationInput from '../components/editRegistration/RegistrationInput';

type EditRegistrationScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.EditRegistration
>;

interface EditRegistrationScreenProps {
  navigation: EditRegistrationScreenNavigationProps;
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
  registraionChangeView: {
    flex: 3,
    width: '78%',
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 5,
    paddingBottom: 10,
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
  attachmentButton: {
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
  cautionText: {
    color: 'red',
    alignSelf: 'center',
    margin: 20,
  },
});

const EditRegistration: React.FunctionComponent<EditRegistrationScreenProps> =
  ({route}: any) => {
    const {userPhone} = route.params;
    return (
      <View style={styles.container}>
        <View style={styles.idView}>
          <Text style={styles.idText}>{userPhone}</Text>
          <Text style={styles.hiText}>안녕하세요!</Text>
        </View>
        <View style={styles.registraionChangeView}>
          <Text style={styles.titleText}>장애인등록증 수정</Text>
          <Text style={styles.subtitleText}>바뀐 장애인등록증</Text>
          <RegistrationInput />
          <Button style={styles.attachmentButton}>
            <Text style={styles.buttonText2}>첨부</Text>
          </Button>
          <Text style={styles.cautionText}>
            {' '}
            관리자가 장애인등록증 수정을 승인할 때까지 {'\n'} 앱 사용이
            제한됩니다.
          </Text>
        </View>
        <View style={styles.buttonView}>
          <Button style={styles.updateButton}>
            <Text style={styles.buttonText}>수정</Text>
          </Button>
        </View>
      </View>
    );
  };

export default EditRegistration;
