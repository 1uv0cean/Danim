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
    listBusNum: {
      flex: 1,
      flexDirection:'column',
      padding: 10,
      fontSize: 30,
      fontWeight:'bold',
     },
     listBusDate: {
       flex: 1,
       flexDirection:'column',
       marginLeft:-50,
     },
     listBusStation:{
       paddingLeft: 12,
     },
     listBusStation2:{
      paddingLeft: 7,
      marginRight: 20,
    },
     elem: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor:'#eee',
      borderBottomWidth:0.5,
      padding: 5,
    },
    itmeView: {
      width: '85%',
      alignSelf: 'center',
      borderRadius: 1,
      elevation: 5,
      marginTop: 10,
      paddingBottom: 20,
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
              arrival: '인하공업전문대학',
              reviewable: 'no',
            },
            {
              key: '77',
              date: '2021.08.08(일요일) 02:31',
              departure: '휘네집',
              arrival: '고양이천국',
              reviewable: 'no',
            },
          ]}
          renderItem={({item}) => (
          <>
            <View style={styles.itmeView}>
            <View style={styles.elem}>
              <Text style={styles.listBusNum}>
                {item.key}
              </Text>
              <Text style={styles.listBusDate}>
                {item.date}
              </Text>
            </View>
            <Text style={styles.listBusStation}>
              출발지: {item.departure}
            </Text>
            <Text style={styles.listBusStation}>
            🚌
            </Text>
            <View style={styles.elem}>
              <Text style={styles.listBusStation2}>
                도착지: {item.arrival}
              </Text>
              <Text style={styles.listBusStation2}>
                {item.reviewable === 'yes'
                  ? '리뷰가능'
                  : item.reviewable === 'done'
                  ? '리뷰완료'
                  : '리뷰불가'}
              </Text>
            </View>
            </View>
            </>
          )}
        />
      </View>
      </>
  );
};

export default ReservationList;
