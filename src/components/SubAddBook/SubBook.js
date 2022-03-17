import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useMutation, QueryCache} from 'react-query';
import useLibraryContext from '../../hooks/useLibraryContext';

async function postData(data) {
  const response = await fetch(
    'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    },
  );
  const json = await response.json();
  return json;
}

export default function SubBook() {
  const [title, setTitle] = useState('');
  const {invalidateBooksListCache} = useLibraryContext();

  const {mutate, isLoading} = useMutation(postData, {
    onSuccess: () => invalidateBooksListCache(),
  });

  async function handleSubmit() {
    await mutate({title});
  }

  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={text => setTitle(text)}
        style={styles.textInput}
        value={title}
      />
      <Button onPress={handleSubmit} title="Añadir Libro" />
      {isLoading && <Text>Añadiendo libro a tu biblioteca</Text>}
    </View>
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
