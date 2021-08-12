/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function MapCard({latitude, longitude, data}) {
  return (
    <View style={styles.mapCardContainer}>
      {latitude && longitude ? (
        <MapView
          style={{flex: 1, borderRadius: 10}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3,
          }}
        />
      ) : (
        <MapView
          style={{flex: 1, borderRadius: 10}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapCardContainer: {
    width: '90%',
    height: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
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

export default MapCard;
