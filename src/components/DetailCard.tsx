/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

function DetailCard({data}) {
  const {name, picture} = data;

  let imageUrl = picture;

  return (
    <View style={styles.detailCardContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.cardImage}>
          <Image source={{uri: imageUrl}} style={styles.image} />
        </View>
        <Text style={{fontSize: 18}}>{name.first + ' ' + name.last}</Text>
      </View>
      <View>
        <Text style={{textAlign: 'center'}}>Email</Text>
        <Text style={{textAlign: 'center', fontSize: 18}}>{data.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailCardContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 36,
    width: '90%',
    height: '50%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardHeader: {
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    backgroundColor: '#F2F2F2',
    marginRight: 15,
    borderRadius: 10,
  },

  image: {
    borderColor: '#000',
    marginRight: 10,
    resizeMode: 'contain',
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});

export default DetailCard;
