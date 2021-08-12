import React, {Node} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

function Card({data}): Node {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Friend', {
          data: data,
        })
      }>
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image style={styles.image} source={{uri: data.picture}} />
        </View>
        <View style={styles.cardBody}>
          <Text>{data.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12,
    height: 90,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
    backgroundColor: '#E5E5E5',
    marginRight: 15,
    borderRadius: 10,
  },
  image: {
    borderColor: '#000',
    marginRight: 10,
    resizeMode: 'contain',
    borderRadius: 10,
    width: 80,
    height: 80,
  },
  cardBody: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default Card;
