/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Initial from './src/screen/Initial';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import CreateAccount from './src/screen/CreateAccount';
import Tourism from './src/screen/Tourism';
import Housing from './src/screen/Housing';
import Foods from './src/screen/Foods';
import Contact from './src/screen/Contact';
import Reservation from './src/screen/Reservation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial" headerMode="none">
          <Stack.Screen name="Initial" component={Initial} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Tourism" component={Tourism} />
          <Stack.Screen name="Housing" component={Housing} />
          <Stack.Screen name="Foods" component={Foods} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Reservation" component={Reservation} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listadoItem: {
    flexBasis: '49%',
    // width: '50%', //es lso mismo
  },
});

export default App;
