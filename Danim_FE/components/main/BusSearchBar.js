// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';
import {funcGetSelBusStop} from '../../function/funcGetSelBusStop';
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
import {funcGetWholeBus} from '../../function/funcGetWholeBus';

const busSearchBar = () => {
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

  const searchFilterFunction = text => {
    // for main things *********************
    // Check if searched text is not blank
    // if (text) {
    //   // Inserted text is not blank
    //   // Filter the masterDataSource
    //   // Update FilteredDataSource
    //   const newData = masterDataSource.filter(function (item) {
    //     const itemData = item.routeno._text
    //       ? item.routeno._text.toUpperCase()
    //       : ''.toUpperCase();
    //     const textData = text.toUpperCase();
    //     return itemData.indexOf(textData) > -1;
    //   });
    //   setFilteredDataSource(newData);
    //   setSearch(text);
    // } else {
    //   // Inserted text is blank
    //   // Update FilteredDataSource with masterDataSource
    //   setFilteredDataSource(masterDataSource);
    //   setSearch(text);
    // }
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.노선번호
          ? item.노선번호.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
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

  // const ItemView = ({item}) => {
  //   return (
  //     // Flat List Item
  //     <Text style={styles.itemStyle} onPress={() => getItem(item)}>
  //       {item.id}
  //       {'.'}
  //       {item.title.toUpperCase()}
  //     </Text>
  //   );
  // };
  //
  // * for main things
  // const ItemView = ({item}) => {
  //   return (
  //     // Flat List Item
  //     <Text style={styles.itemStyle} onPress={() => getItem(item)}>
  //       {item.routeid._text}
  //       {'.'}
  //       {item.routeno._text.toUpperCase()}
  //     </Text>
  //   );
  // };
  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => goToReservation(item)}>
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

  const goToReservation = async item => {
    // Function for click on an item

    // Alert.alert('Id : ' + item.노선번호 + ' Title : ' + item.노선번호);

    const busNumber = item.노선번호;
    let getResult = await funcGetSelBusStop({busNumber});
  };

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
