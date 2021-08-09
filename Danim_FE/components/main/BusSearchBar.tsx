// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';
//import {funcGetSelBusStop} from '../../function/funcGetSelBusStop';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import {funcGetWholeBus} from '../../function/funcGetWholeBus';
import { HomeScreens } from '../../navigators/index';
import { useNavigation } from '@react-navigation/native';




const busSearchBar = () => {
  const navigation = useNavigation(); 
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const getWholeBusList = async () => {
    try {
      let getResult = await funcGetWholeBus();
      // console.log('GETRESULT : ', getResult);
      setFilteredDataSource(getResult);
      setMasterDataSource(getResult);
    } catch (e) {
      Alert.alert('오류 발생');
    }
  };

  useEffect(() => {
    getWholeBusList();
  }, []);

  const searchFilterFunction = (text: React.SetStateAction<string>) => {
    if (text) {
      const newData = masterDataSource.filter(function (item: { 노선번호: any; }) {
        const itemData = item.노선번호
          ? item.노선번호.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toString().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}:any) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} 
        onPress={() =>
        navigation.navigate(HomeScreens.BusInfoMain)}>
        {/* {item.노선번호} */}

        {/* {'.'} */}
        {item.노선번호}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  /** 
  const goToReservation = async (item: { 노선번호: any; }) => {
    // Function for click on an item
    Alert.alert('Id : ' + item.노선번호 + ' Title : ' + item.노선번호);
    const busNumber = item.노선번호;
    let getResult = await funcGetSelBusStop({busNumber});
  };
  */

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="버스 검색"
      />
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default busSearchBar;
