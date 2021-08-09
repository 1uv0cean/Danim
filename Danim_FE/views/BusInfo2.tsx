import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const info2 = () => {
  const styles = StyleSheet.create({
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
    <View style={styles.listContainer}>
        <FlatList
          data={[
            { key: '경원여객 방면' },
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
  );
};

export default info2;
