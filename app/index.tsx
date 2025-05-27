import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Provider as PaperProvider, IconButton } from 'react-native-paper';

export default function App() {

  const [favorito, setfavoritar] = useState(false);
  const [play, setplay] = useState(false);

  return (
    <View style={styles.main}>
      <PaperProvider>
        <View style={styles.container}>
          <IconButton
            icon="dots-vertical"
            size={40}
            iconColor="white"
            onPress={() => console.log('opçoes abertas')}
            style={styles.opcoes}
          />

          <Image source={require('../assets/images/images.jpeg')} style={[styles.img]} />

          <View style={styles.buttons}>
            <Text style={[styles.texto]}>Identidade - Jorge Aragão</Text>
            <IconButton
              icon="heart"
              size={40}
              iconColor={favorito ? 'red' : 'white'}
              onPress={() => setfavoritar((!favorito))}
              // style={[styles.opcoe]}
            />
          </View>




          <View style={styles.buttons}>
            <IconButton
              icon="skip-previous"
              size={40}
              mode="contained"
              iconColor="black"
              containerColor="white"
              onPress={() => console.log('voltando')}
              style={styles.playButton}
            />
            <IconButton
              icon={play ? "play" : "pause"}
              size={40}
              mode="contained"
              iconColor="black"
              containerColor="white"
              onPress={() => setplay(!play)}
              style={styles.playButton}
            />
            <IconButton
              icon="skip-next"
              size={40}
              mode="contained"
              iconColor="black"
              containerColor="white"
              onPress={() => console.log('adiantando')}
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
    margin: 15,
    borderRadius: 100, // garante que seja bem redondo
  },
  img: {

    width: 300,
    height: 300,
    margin: 5,
    borderRadius: 50,
    marginBottom: 10,

  },
  buttons: {

    flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
    alignItems: 'center',
  },
  opcoes: {
    left: "30%",
  },
  texto: {
    color: "white",
    fontSize: 25,
    
  }
});
