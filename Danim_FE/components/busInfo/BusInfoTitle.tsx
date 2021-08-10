import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { busNumberProps } from '../../views/BusInfoMain';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: '#2C3E50',
    borderBottomWidth: 1,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  subTitle: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
  },
  favorites: {
    marginTop: 10,
    marginRight: 10,
  },
  busInfo: {
    fontSize: 12,
    marginRight: 10,
    marginBottom: 5,
  },
  busInfoContainer: {
    flexDirection: 'column',
  },
});
const busInfoTitle = (busInfo: busNumberProps['busInfo']) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>{busInfo.busNumber}</Text>
        <Icon style={styles.favorites} name="hearto" size={30} />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subTitle}>서울 간선버스</Text>
        <View style={styles.busInfoContainer}>
          <Text style={styles.busInfo}>문래동 {'<->'} 양재동</Text>
          <Text style={styles.busInfo}>04:09 ~ 22:39 | 배차간격 : 10~20분</Text>
        </View>
      </View>
    </View>
  );
};

export default busInfoTitle;
