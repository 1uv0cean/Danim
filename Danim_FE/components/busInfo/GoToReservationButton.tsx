import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';

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
const goToReservationButton = () => {
  return (
    <Button style={styles.ReservationButton}>
      <Text style={styles.Text}>예약</Text>
    </Button>
  );
};

export default goToReservationButton
