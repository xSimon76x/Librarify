import React, {useState} from 'react';
import {Image, Text, View, Button, TextInput, StyleSheet} from 'react-native';
import {useMutation, QueryCache} from 'react-query';
import useLibraryContext from '../../hooks/useLibraryContext';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const options = {
  title: 'Selecciona la caractura',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

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
  const [image, setImage] = useState(null);

  const {mutate, isLoading} = useMutation(postData, {
    onSuccess: () => invalidateBooksListCache(),
  });

  async function handleSubmit() {
    await mutate({title, base64Image: image});
  }

  function launchImagePicker() {
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Else');
        console.log(response.assets[0].uri);
        const source = response.assets[0].uri; //`data:image/jpeg;base64,${response.assets[0].uri}`;
        setImage(source);
      }
    });
  }

  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={text => setTitle(text)}
        style={styles.textInput}
        value={title}
      />
      {image && <Image source={{uri: image}} style={styles.image} />}
      <Button onPress={handleSubmit} title="Añadir Libro" />
      <Button onPress={launchImagePicker} title="Seleccionar caratula" />
      {isLoading && <Text>Añadiendo libro a tu biblioteca</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 16,
    display: 'flex',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'red',
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
  },
});
