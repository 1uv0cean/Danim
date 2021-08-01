import React from 'react';
import {Text, View} from 'react-native';

const ReservationList: React.FunctionComponent = ({route}: any) => {
  const userPhone = route.params.userPhone;
  return (
    <View>
      <Text>과거 예약 내역{userPhone}</Text>
    </View>
  );
};

export default ReservationList;
