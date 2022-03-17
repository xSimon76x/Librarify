import React from "react"
import { TextInput, View, SafeAreaView, Button, Text, StyleSheet } from "react-native"
import { useState } from "react/cjs/react.production.min";

export default function AddBook() {

    const [title, setTitle] = useState(null);

    function handleSubmit(params) {
        console.log(title)
    }

    return (
        <SafeAreaView>
            <View style={styles.form}>
                <TextInput onChange={text => setTitle(text)} style={styles.textInput} />
                <Button onPress={handleSubmit} title="Press me"></Button>
            </View>
            <Text> Hola Soy la vista de book detail</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 16
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
})