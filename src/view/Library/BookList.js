import React from 'react';
import { Text, View, FlatList } from 'react-native';
import BookListItem from '../../components/Book/BookListItem';

const BOOK_LIST = [
    {
        id: 1,
        title: 'Hacia rutas salvajes',
        cover: 'https://picsum.photos/200'
    },
    {
        id: 2,
        title: 'El nombre del viento',
        cover: 'https://picsum.photos/200'
    },
    {
        id: 3,
        title: 'Extraño de la ceguera',
        cover: 'https://picsum.photos/200'
    },
    {
        id: 4,
        title: 'Extraño de la ceguera',
        cover: 'https://picsum.photos/200'
    },
    {
        id: 5,
        title: 'Extraño de la ceguera',
        cover: 'https://picsum.photos/200'
    },
    {
        id: 6,
        title: 'Extraño de la ceguera',
        cover: 'https://picsum.photos/200'
    },
    {
        id: 7,
        title: 'Extraño de la ceguera',
        cover: 'https://picsum.photos/200'
    },


];

export default function BookList({ navigation }) {

    function handleOnPress() {
        navigation.navigate('BooksDetail');
    }

    return (
        <View>
            {/* <Text> Soy Home</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Library')}>
                <Text> hacia library</Text>
            </TouchableHighlight> */}
            <FlatList
                data={BOOK_LIST}
                renderItem={({ item }) => <BookListItem book={item} onPress={handleOnPress} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    <View>
                        <Text>---Mi lista de libros---</Text>
                    </View>
                }></FlatList>
        </View>
    );
}
