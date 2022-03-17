/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BookList from './src/view/Library/BookList';
import BooksDetail from './src/view/Library/BooksDetail';
import AddBook from './src/view/AddBook/AddBook';
import {LibraryContextProvider} from './src/contexts/LibraryContext';
import {QueryClient, QueryClientProvider} from 'react-query';

const LibraryStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LibraryStackScreen() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="BookList"
        component={BookList}
        options={{title: 'Inicio'}}
      />
      <LibraryStack.Screen name="BooksDetail" component={BooksDetail} />
    </LibraryStack.Navigator>
  );
}
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LibraryContextProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="LibraryTab" component={LibraryStackScreen} />
            <Tab.Screen name="AddBook" component={AddBook} />
            {/* <Tab.Screen name="BooksDetail" component={BooksDetail} /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </LibraryContextProvider>
    </QueryClientProvider>
  );
};

export default App;
