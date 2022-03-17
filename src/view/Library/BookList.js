import React, { useState, useEffect } from 'react';
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

    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData();
    })

    async function fetchData() {

        const response = await fetch('https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed');

        const json = await response.json();

        return setData(json);
    }


    if (data) {
        console.log(data)
    }


    function handleOnPress() {
        navigation.navigate('BooksDetail');
    }

    return (
        <View>
            {/* <Text> Soy Home</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Library')}>
                <Text> hacia library</Text>
            </TouchableHighlight> */}

            {data ? (
                <>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <BookListItem book={item} onPress={handleOnPress} />}
                        keyExtractor={item => item.Id}
                        ListHeaderComponent={
                            <View>
                                <Text>---Mi lista de libros---</Text>
                            </View>
                        }></FlatList>
                </>

            ) : (
                <>
                    <Text>Cargando...</Text></>
            )}


        </View>
    );
}
