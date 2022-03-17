import React, { useState } from 'react';
import {
    TextInput,
    View,
    SafeAreaView,
    Button,
    Text,
    StyleSheet,
} from 'react-native';
import { useMutation } from '@apollo/client';


async function postData(data) {
    const response = await fetch(
        'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed',
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        },
    );
    const json = await response.json();
    return json;
}


export default function AddBook() {
    const [title, setTitle] = useState('');
    const [mutate, { loading }] = useMutation(postData)


    function handleSubmit() {
        mutate(title)
    }



    return (
        <SafeAreaView>
            <View style={styles.form}>
                <TextInput onChangeText={text => setTitle(text)} style={styles.textInput} value={title} />
                <Button onPress={handleSubmit()} title="Añadir Libro" />
            </View>
            <Text> Hola Soy la vista de book detail</Text>
            {loading && <Text>Añadiendo tu nuevo libro</Text>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 16,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        backgroundColor: 'red',
    },
});
