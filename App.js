/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/view/Home"
import Library from "./src/view/Library"

const Stack = createStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Library" component={Library} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
