import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import BookListItem from './BookListItem';
import useLibraryContext from '../../hooks/useLibraryContext';

export default function ListIntermedioBlist_BlistItem({navigation}) {
  // const [data, setData] = useState(null)

  const {isSuccess, isLoading, data} = useLibraryContext();

  function handleOnPress() {
    navigation.navigate('BooksDetail');
  }

  // const { isLoading, data, isError } = useQuery('GET_BOOK', fetchData);

  return (
    <View>
      {isSuccess ? (
        <>
          <FlatList
            data={isSuccess ? data : []}
            renderItem={({item}) => (
              <BookListItem book={item} onPress={handleOnPress} />
            )}
            keyExtractor={item => item.ID}
            ListHeaderComponent={
              <View>
                <Text>---Mi lista de libros---</Text>
              </View>
            }
            ListEmptyComponent={
              <View>
                {isLoading == false && (
                  <Text>Cargando lista de libros....</Text>
                )}
              </View>
            }></FlatList>
        </>
      ) : (
        <>
          <Text>Cargando...</Text>
        </>
      )}
    </View>
  );
}
