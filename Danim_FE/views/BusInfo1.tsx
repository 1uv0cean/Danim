import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

// type RouteMapScreenNavigationProps = StackNavigationProp<
//   HomeStackParamList,
//   HomeScreens.RouteMap
// >;

interface RouteMapScreenProps {
  // navigation: RouteMapScreenNavigationProps;
  route: any;
  busNumber: any;
}

const busInfo1 = ({busNumber}: any) => {
  const busNumber2 = busNumber;
  console.log('BUSNUMBER 123123123 : ', busNumber2);
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
          {key: '0001', stationName: '문래동시점'},
          {key: '0002', stationName: '두산위브진주아파트'},
          {key: '0003', stationName: '문래롯데캐슬'},
          {key: '0004', stationName: '문래중학교'},
          {key: '0005', stationName: '영문초등학교'},
          {key: '0006', stationName: '문래힐스테이트아파트'},
          {key: '0007', stationName: '문래역'},
          {key: '0008', stationName: '당산동진로아파트'},
          {key: '0009', stationName: '김안과병원'},
          {key: '0010', stationName: '영등포시장'},
          {key: '0011', stationName: '영등포시장로터리방면'},
          {key: '0012', stationName: '신길역'},
          {key: '0013', stationName: '신길역1호선'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.listItem}>{item.stationName}</Text>
        )}
      />
    </View>
  );
};

export default busInfo1;
