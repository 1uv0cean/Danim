import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const busInfo2 = () => {
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
          {key: '0001', stationName: '양재노인종합복지관'},
          {key: '0002', stationName: '양재역.양재1동민원분소'},
          {key: '0003', stationName: '블랙야크양재사옥'},
          {key: '0004', stationName: '양재역.서초문화예술회관'},
          {key: '0005', stationName: '뱅뱅사거리'},
          {key: '0006', stationName: '뱅뱅사거리'},
          {key: '0007', stationName: '서초그랑자이아파트'},
          {key: '0008', stationName: '서일초등학교'},
          {key: '0009', stationName: '국제전자센터'},
          {key: '0010', stationName: '남부터미널.한일시멘트'},
          {key: '0011', stationName: '서초중학교'},
          {key: '0012', stationName: '서울고등학교'},
          {key: '0013', stationName: '방배동신동아아파트'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.listItem}>{item.stationName}</Text>
        )}
      />
    </View>
  );
};

export default busInfo2;
