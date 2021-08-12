import React, {Node} from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Card from './Card';
import Friend from '../pages/Friend';

const mapStateToProps = state => ({
  friends: state.friends,
  count: state.count,
});

function CardList({cards}): Node {
  const renderCard = ({item}) => <Card data={item} />;

  const renderEmpty = () => (
    <View>
      <Text>The data is empty</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.cardList}
      data={cards}
      renderItem={renderCard}
      keyExtractor={item => item._id}
      ListEmptyComponent={renderEmpty}
      initialNumToRender={10}
    />
  );
}

CardList.propTypes = {
  cards: PropTypes.array,
};

const styles = StyleSheet.create({
  cardList: {
    display: 'flex',
    flex: 1,
    margin: 'auto',
    color: '#FFF',
    marginTop: 12,
    width: '90%',
    flexDirection: 'column',
    flexGrow: 1,
    borderRadius: 10,
  },
});

export default connect(mapStateToProps)(CardList);
