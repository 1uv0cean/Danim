import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';
import { HomeScreens } from '../../navigators';

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
  const navigation = useNavigation();
  return (
    <Button 
      style={styles.ReservationButton}
      onPress={() => navigation.navigate(HomeScreens.Reservation)}>
      <Text style={styles.Text}>예약</Text>
    </Button>
  );
};

export default goToReservationButton
