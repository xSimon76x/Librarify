import React from "react"
import { Text, View, TouchableHighlight } from "react-native"

const BOOK_LIST = [
    {
        id: 1,
        title: 'Hacia rutas salvajes',
    },
    {
        id: 2,
        title: 'El nombre del viento',
    }
]

export default function Home({ navigation }) {

    return (
        <View>
            <Text> Soy Home</Text>
            <TouchableHighlight onPress={() => navigation.navigate('Library')}>
                <Text> hacia library</Text>
            </TouchableHighlight>
        </View>
    );
};
