import React from "react"
import { Text, View, TouchableHighlight } from "react-native"

export default function BookListItem({ book }) {
    return (
        <View>
            <Text>{book.title}</Text>
        </View>
    )
};


