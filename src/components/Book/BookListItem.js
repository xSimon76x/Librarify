import React from "react"
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import Icon from 'react-native-ionicons'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'

    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 10
    },
    icon: {
        marginLeft: "auto",
        marginRight: 20
    }
})

export default function BookListItem({ book, onPress }) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image source={{ uri: book.cover }} style={styles.image}></Image>
                <Text>{book.title}</Text>
                <Icon ios="ios-add" android="md-add" style={styles.icon} />
            </View>
        </TouchableOpacity>

    )
};




