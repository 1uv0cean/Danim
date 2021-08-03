import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {HomeScreens, HomeStackParamList} from '../navigators/index';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from 'react-native-paper';
import ReviewInput from '../components/writeReview/ReviewInput';

type WriteReviewScreenNavigationProps = StackNavigationProp<
  HomeStackParamList,
  HomeScreens.WriteReview
>;

interface WriteReviewScreenProps {
  navigation: WriteReviewScreenNavigationProps;
}

const styles = StyleSheet.create({
  titleText: {
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 25,
    marginTop: 10,
    alignSelf: 'center',
  },
  busDriverImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#2C3E50',
    width: '78%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

const WriteReview: React.FunctionComponent<WriteReviewScreenProps> = () => {
  return (
    <View>
      <Text style={styles.titleText}>3-2번 기사님 어떠셨나요?</Text>
      <Image
        style={styles.busDriverImage}
        source={require('../img/bus-driver.png')}
      />
      <ReviewInput />
      <Button style={styles.saveButton}>
        <Text style={styles.buttonText}>저장</Text>
      </Button>
    </View>
  );
};

export default WriteReview;
