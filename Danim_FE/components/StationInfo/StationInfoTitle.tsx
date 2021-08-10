import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '23%',
    backgroundColor: '#2C3E50',
  },
  StationText: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 35,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 5,
  },
  StationIdText: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  DirectionText: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  AddressText: {
    color: '#FFFFFF',
    textAlign: 'right',
    fontSize: 14,
    marginTop: 12,
    marginRight: 10,
  },
  BusText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowView: {
    flexDirection: 'row',
  },
  Icon: {
    marginLeft: '30%',
    marginTop: 25
  }
});


const StationInfoTitle = () => {
  return (
    <View style={styles.header}>
      <View style={styles.rowView}>
        <Text style={styles.StationText}>수암 파출소</Text>
        <Icon style={styles.Icon}  name="hearto" size={40} color='white'/>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.StationIdText}>21515</Text>
        <Text style={styles.DirectionText}>|</Text>
        <Text style={styles.DirectionText}>남사박 방면</Text>
      </View>
      <Text style={styles.AddressText}>경기도 원곡동 안산동 수인로 495</Text>
    </View>
  );
};

export default StationInfoTitle;