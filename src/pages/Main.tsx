/* eslint-disable prettier/prettier */
import React, {useEffect, useState, Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
} from 'react-native';
import {connect, Provider} from 'react-redux';

import Card from '../components/Card';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {store} from '../store/store';
import {bindActionCreators} from 'redux';
import {UPDATE_FRIENDS_LIST} from '../store/ActionTypes';
import {updateFreindsList} from '../store/action';
import * as types from '../store/ActionTypes';

const Main: () => Node = ({navigation, freinds}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    (async () => {
      const header = new Headers();
      header.append('Content-Type', 'application/json');
      header.append(
        'Authorization',
        'Bearer v3srs6i1veetv3b2dolta9shrmttl72vnfzm220z',
      );
      try {
        let response = await fetch(
          'https://api.json-generator.com/templates/Xp8zvwDP14dJ/data',
          {
            method: 'GET',
            headers: header,
          },
        );
        let json = await response.json();
        json.map((item, index) => {
          item.picture = item.picture
            .replace('http', 'https')
            .replace('placehold.it', 'picsum.photos')
            .replace(/[0-9]x[0-9]/, '/');
        });
        await setData([...json]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSearch = text => {
    text = text.toLowerCase();
    setSearchValue(text);
    let result = [];
    if (text === '') {
      return null;
    }
    result = data.filter(data => {
      return data.email.search(text) != -1;
    });
    setFilteredData(result);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.mainTitle}>Hello Friends?</Text>
      <SearchBox searchValue={searchValue} handleSearch={handleSearch} />
      {isLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : searchValue == '' ? (
        <CardList cards={data} />
      ) : (
        <CardList cards={filteredData} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3143e8',
  },
  mainTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  loading: {
    marginTop: 120,
    color: '#fff',
    fontSize: 24,
  },
});

export default Main;
