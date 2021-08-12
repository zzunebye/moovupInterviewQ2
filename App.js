/* eslint-disable prettier/prettier */
import React, { useEffect, useState, Node } from 'react';
import { connect, Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './src/navigation/AppNavigator'
// import { createAppContainer } from 'react-navigation';




import Main from './src/pages/Main'
// import Main from './src/page/Main';
import { store } from './src/store/store';


const Stack = createStackNavigator();


const App: () => Node = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
