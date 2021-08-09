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
          {stationName: '양재역.양재1동민원분소'},
          {stationName: '양재노인종합복지관'},
          {stationName: '블랙야크양재사옥'},
          {stationName: '양재역.서초문화예술회관'},
          {stationName: '뱅뱅사거리'},
          {stationName: '뱅뱅사거리'},
          {stationName: '서초그랑자이아파트'},
          {stationName: '서일초등학교'},
          {stationName: '국제전자센터'},
          {stationName: '남부터미널.한일시멘트'},
          {stationName: '서초중학교'},
          {stationName: '서울고등학교'},
          {stationName: '방배동신동아아파트'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.listItem}>{item.stationName}</Text>
        )}
      />
    </View>
  );
};

export default busInfo2;
