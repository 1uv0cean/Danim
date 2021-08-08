import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Bus = () => {
  const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
    },
    listItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
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
          <Text style={styles.listItem}>
            {item.busNumber}
            {'/'}
            {item.type}
          </Text>
        )}
      />
    </View>
  );
};

export default Bus;
