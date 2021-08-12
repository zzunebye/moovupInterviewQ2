/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchValue, handleSearch }):any => {
  return (
    <View style={styles.searchBoxContainer}>
      <TextInput
        style={styles.searchBox}
        placeholder={'Search your friend here'}
        placeholderTextColor="#C2C2C2"
        onChangeText={text => handleSearch(text)}
        value={searchValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBoxContainer: {
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
  },
  searchBox: {
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

SearchBox.propTypes = {
  handleSearch: PropTypes.func,
  searchValue: PropTypes.string,
};

export default SearchBox;