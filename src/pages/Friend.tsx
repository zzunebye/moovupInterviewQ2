/* eslint-disable prettier/prettier */
import React, { useEffect, useState, Node } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import DetailCard from '../components/DetailCard';
import MapCard from '../components/MapCard';

function Friend({route}) {
  const {_id, email, location, name, picture} = route.params.data;
  return (
    <SafeAreaView style={styles.friendContainer}>
      <Text style={styles.friendTitle}>Location of Friend</Text>
      <MapCard latitude={location.latitude} longitude={location.longitude} data={location}/>
      <DetailCard data={route.params.data}/>
      
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  friendContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3143e8',
  },
  friendTitle: {
    color: '#fff',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  detailCardContainer: {
    marginTop: 36,
    width: '90%',
    height: '50%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10, 
  },
  text:{
    color:'#000',
  }

});

export default Friend
