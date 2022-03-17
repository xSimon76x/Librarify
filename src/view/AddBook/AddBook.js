import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import SubBook from '../../components/SubAddBook/SubBook';

export default function AddBook() {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView>
      <QueryClientProvider client={queryClient}>
        <SubBook />
      </QueryClientProvider>
      <Text> Hola Soy la vista de book detail</Text>
      {/* {loading && <Text>Añadiendo tu nuevo libro</Text>} */}
    </SafeAreaView>
  );
}
