import React, { Component } from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import {Button} from 'react-native-paper';
import CommentInput from '../components/writecomment/CommentInput';
import RatingBar from '../components/writecomment/RatingBar';

const styles = StyleSheet.create({
    titleText: {
      fontWeight: 'bold',
      fontSize: 19,
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 25,
    },
    busDriverImage: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginBottom: 25,
    },
    saveButton: {
      backgroundColor: '#2C3E50',
      width: '78%',
      alignSelf: 'center',
      marginTop: 25,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 17,
      fontWeight: 'bold',
    },
    starRating: {
      width: '78%',
    },
    starView: {
      width: '63%', 
      alignSelf: 'center', 
    },
    reviewInput: {
        width: '78%',
        height: '40%',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#a5a5a5',
        marginTop: 15,
        textAlignVertical: 'top',
    },
  });
  
//https://github.com/djchie/react-native-star-rating

class WriteComment extends Component {

  render() {
    return (
    <View>
        <Text style={styles.titleText}>3-2번 기사님 어떠셨나요?</Text>
        <Image
          style={styles.busDriverImage}
          source={require('../img/bus-driver.png')}
        />
        <View style={styles.starView}>
            <RatingBar/>
       </View>  
       <CommentInput/>
       <Button style={styles.saveButton}>
            <Text style={styles.buttonText}>저장</Text>
       </Button>
    </View>

    );
  }
}

export default WriteComment;