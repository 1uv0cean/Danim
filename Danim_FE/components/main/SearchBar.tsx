import * as React from 'react';
import {Searchbar} from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  //쿼리문 입력해주세여
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
