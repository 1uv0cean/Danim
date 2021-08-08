import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const ReservationList: React.FunctionComponent = ({route}: any) => {
  const userPhone = route.params.userPhone;
  console.log(userPhone);
  const styles = StyleSheet.create({
    topLayout: {
      backgroundColor: '#2C3E50',
      height: '15%',
    },
    topLayoutTitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25,
      marginLeft: 30,
      marginTop: 20,
    },
    topLayoutText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 30,
      marginTop: 5,
    },
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
    <>
      <View style={styles.topLayout}>
        <Text style={styles.topLayoutTitle}>과거 예약 내역</Text>
        <Text style={styles.topLayoutText}>
          리뷰는 하차 후 하루 이내에 작성해 주셔야 합니다.
        </Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={[
            {
              key: '3-2',
              date: '2021.07.26(월요일) 18:13',
              departure: '(주)창원',
              arrival: '롯데백화점 (인천터미널)',
              reviewable: 'yes',
            },
            {
              key: '34',
              date: '2021.07.03(토요일) 13:03',
              departure: '모래내시장',
              arrival: '남인천세무서',
              reviewable: 'done',
            },
            {
              key: '11',
              date: '2021.06.16(월요일) 09:51',
              departure: '가림고등학교',
              reviewable: 'no',
            },
          ]}
          renderItem={({item}) => (
            <Text style={styles.listItem}>
              {item.key} , {item.date} , {item.departure} , {item.arrival} ,
              {item.reviewable === 'yes'
                ? '리뷰가능'
                : item.reviewable === 'done'
                ? '리뷰완료'
                : '리뷰불가'}
            </Text>
          )}
        />
      </View>
    </>
  );
};

export default ReservationList;
