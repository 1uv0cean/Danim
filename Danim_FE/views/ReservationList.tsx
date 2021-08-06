import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const ReservationList: React.FunctionComponent = ({route}: any) => {
  const userPhone = route.params.userPhone;
  console.log(userPhone);
  const styles = StyleSheet.create({
    topLayout: {
      backgroundColor :'#2C3E50',
      height: '15%',
    },
    topLayoutTitle: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 25,
      marginLeft: 30,
      marginTop: 20,
    },
    topLayoutText: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 30,
      marginTop:5,
    },
    listContainer: {
      flex: 1,
     },
    listItem: {
       padding: 10,
       fontSize: 18,
       height: 44,
     },
  })
  return (
    <>
    <View style={styles.topLayout}>
      <Text style={styles.topLayoutTitle}>과거 예약 내역</Text>
      <Text style={styles.topLayoutText}>리뷰는 하차 후 하루 이내에 작성해 주셔야 합니다.</Text>
    </View>
    <View style={styles.listContainer}>
        <FlatList
          data={[
            { key: '예약 내역 리스트' },
            { key: '고양이' },
            { key: '냥' },
            { key: '야옹' },
            { key: '차민재' },
            { key: '홍주희' },
            { key: '이샘미' },
            { key: '한선희' },
            { key: '송휘' },
            { key: '조규철' },
            { key: '김경원' },
            { key: '모죽' },
            { key: '얍' },
            { key: '나와라' },
          ]}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>} />
      </View>
      </>
  );
};

export default ReservationList;
