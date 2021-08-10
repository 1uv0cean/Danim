import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Bus = () => {
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
            key: '0000',
            busNumber: '641',
            type: '간선버스',
          },
          {
            key: '0001',
            busNumber: '5413',
            type: '지선버스',
          },
          {
            key: '0002',
            busNumber: '5524',
            type: '지선버스',
          },
          {
            key: '0003',
            busNumber: '643',
            type: '간선버스',
          },
        ]}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <View style={styles.subContainer}>
              <Text style={styles.itemTitle}>{item.busNumber}</Text>
              <Icon style={styles.favorites} name="heart" size={30} />
            </View>
            <Text>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Bus;
