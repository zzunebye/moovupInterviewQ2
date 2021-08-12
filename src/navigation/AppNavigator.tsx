/* eslint-disable prettier/prettier */
import React, { useEffect, useState, Node } from 'react';
import { connect, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createAppContainer } from 'react-navigation';

import Main from '../pages/Main'
import Friend from '../pages/Friend';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Friend" component={Friend} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};



// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default AppNavigator;
