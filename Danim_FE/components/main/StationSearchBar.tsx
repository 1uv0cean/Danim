// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';
import {funcGetWholeStop} from '../../function/funcGetWholeStop';
import {funcGetSelBus} from '../../function/funcGetSelBus';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';

const stationSearchBar = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  const getWholeStopList = async () => {
    try {
      let getResult = await funcGetWholeStop();
      // console.log('GETRESULT : ', getResult);
      setFilteredDataSource(getResult);
      setMasterDataSource(getResult);
    } catch (e) {
      Alert.alert('오류 발생');
    }
  };

  useEffect(() => {
    getWholeStopList();
  }, []);

  // const searchFilterFunction = text => {
  //   // Check if searched text is not blank
  //   if (text) {
  //     // Inserted text is not blank
  //     // Filter the masterDataSource
  //     // Update FilteredDataSource
  //     const newData = masterDataSource.filter(function (item) {
  //       const itemData = item.title
  //         ? item.title.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredDataSource(newData);
  //     setSearch(text);
  //   } else {
  //     // Inserted text is blank
  //     // Update FilteredDataSource with masterDataSource
  //     setFilteredDataSource(masterDataSource);
  //     setSearch(text);
  //   }
  // };

  const searchFilterFunction = (text: React.SetStateAction<string>) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item: {title: any}) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toString().toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}: any) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => goToReservation(item)}>
        {item.stNm._text}
        {'.'}
        {item.arsId._text}
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

  const goToReservation = async item => {
    // Function for click on an item

    // Alert.alert('Id : ' + item.노선번호 + ' Title : ' + item.노선번호);
    const stationNumber = item.arsId._text;
    let getResult = await funcGetSelBus({stationNumber});
    // Result : 선택한 정류장의 저상버스 도착정보
    console.log('GETRESULT : ', getResult);
  };

  const getItem = (item: {id: string; title: string}) => {
    // Function for click on an item
    Alert.alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="정류장 검색"
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

export default stationSearchBar;
