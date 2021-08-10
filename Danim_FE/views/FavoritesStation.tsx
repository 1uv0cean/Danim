import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Station = () => {
  const styles = StyleSheet.create({
    listContainer: {
      backgroundColor: 'white',
    },
    listItem: {
      padding: 10,
      fontSize: 18,
      borderBottomColor: '#2C3E50',
      borderBottomWidth: 0.5,
    },
    itemTitle:{
      fontSize: 19,
      fontWeight: 'bold',
    },
    subContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    favorites: {
      marginTop: 10,
      marginRight: 10,
    },
  });
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={[
          {
            key: 'S0000',
            stationId: '22566',
            stationName: '방배(백석예술대)역',
            goTo: '방배(백석예술대)역.서초프라자약국 방면',
          },
          {
            key: 'S0001',
            stationId: '23827',
            stationName: '양재역',
            goTo: '도곡개포한신아파트 방면',
          },
          {
            key: 'S0002',
            stationId: '22298',
            stationName: 'AT센터.양재꽃시장',
            goTo: '하나로마트.코트라 방면',
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <View style={styles.subContainer}>
              <Text style={styles.itemTitle}>{item.stationName}</Text>
              <Icon style={styles.favorites} name="heart" size={30} />
            </View>
            <Text>{item.stationId}{' | '}{item.goTo}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Station;
