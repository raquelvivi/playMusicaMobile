import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Provider as PaperProvider, IconButton } from 'react-native-paper';

export default function App() {

  const [favorito, setfavoritar] = useState(false);

  return (
    <View style={styles.main}>
      <PaperProvider>
        <View style={styles.container}>
        <IconButton
              icon="dots-vertical"
              size={40}
              iconColor="white"
              onPress={() => console.log('Play pressionado')}
              style={styles.opcoes}
            />

          <Image source={require('../assets/images/images.jpeg')} style={[styles.img]} />

          <IconButton
              icon="heart"
              size={40}
              iconColor={favorito ? 'red' : 'white'}
              onPress={() => setfavoritar((!favorito))}
              style={[styles.opcoes]}
            />

          <View style={styles.buttons}>
            <IconButton
              icon="skip-previous"
              size={40}
              mode="contained"
              iconColor="black"
              containerColor="white"
              onPress={() => console.log('Play pressionado')}
              style={styles.playButton}
            />
            <IconButton
              icon="play"
              size={40}
              mode="contained"
              iconColor="black"
              containerColor="white"
              onPress={() => console.log('Play pressionado')}
              style={styles.playButton}
            />
            <IconButton
              icon="skip-next"
              size={40}
              mode="contained"
              iconColor="black"
              containerColor="white"
              onPress={() => console.log('Play pressionado')}
              style={styles.playButton}
            />
          </View>

        </View>
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: 'black'
  },
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    borderRadius: 100, // garante que seja bem redondo
  },
  img: {

    width: 300,
    height: 300,
    margin: 5,
    borderRadius: 50,
    marginBottom: 10,

  },
  buttons:{
    flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
    alignItems: 'center',
  },
  opcoes:{
    left: "45%",
  }
});
