import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  ReservationButton: {
    color: 'white',
    height: 50,
    backgroundColor: '#2C3E50',
    marginTop: 20,
    margin: 10,
    padding: 4,
  },
  Text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
const goToReservationButoon = () => {
  return (
    <Button style={styles.ReservationButton}>
      <Text style={styles.Text}>예약</Text>
    </Button>
  );
};

export default goToReservationButoon;
