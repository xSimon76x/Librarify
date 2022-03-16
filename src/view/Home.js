import React from 'react';
import { Text, View, TouchableHighlight, FlatList } from 'react-native';
import BookListItem from '../components/Book/BookListItem';

const BOOK_LIST = [
    {
        id: 1,
        title: 'Hacia rutas salvajes',
    },
    {
        id: 2,
        title: 'El nombre del viento',
    },
    {
        id: 3,
        title: 'Extraño de la ceguera',
    },
];

export default function Home({ navigation }) {
    return (
        <View>
            {/* <Text> Soy Home</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Library')}>
                <Text> hacia library</Text>
            </TouchableHighlight> */}
            <FlatList
                data={BOOK_LIST}
                renderItem={({ item }) => <BookListItem book={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    <View>
                        <Text>---Mi lista de libros---</Text>
                    </View>
                }></FlatList>
        </View>
    );
}
