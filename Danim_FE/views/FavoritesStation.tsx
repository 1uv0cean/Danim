import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Station = () => {
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
            key: 'S0000',
            stationId: '22566',
            stationName: '방배(백석예술대)역',
            goTo: '방배(백석예술대)역.서초프라자약국 방면',
          },
          {
            key: 'S0000',
            stationId: '23827',
            stationName: '양재역',
            goTo: '도곡개포한신아파트 방면',
          },
          {
            key: 'S0000',
            stationId: '22298',
            stationName: 'AT센터.양재꽃시장',
            goTo: '하나로마트.코트라 방면',
          },
        ]}
        renderItem={({item}) => (
          <Text style={styles.listItem}>
            {item.stationName}
            {'/'}
            {item.stationId}
            {'/'}
            {item.goTo}
          </Text>
        )}
      />
    </View>
  );
};

export default Station;
