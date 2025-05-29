import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native';
import { Provider as PaperProvider, IconButton } from 'react-native-paper';


import Music from '../components/music';


export default function App() {


    const { width } = useWindowDimensions();
    const Web = width > 600;
    



    return (


        <View style={styles.main}>

            <Text style={[styles.h1]}>O pop do ano!</Text>

            <Link href="/"></Link>



            {Web ? (
                <View style={styles.linha}>
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                </View>
            ) : (
                <View style={styles.linha}>
                    <Music />
                    <Music />
                    <Music />

                </View>
            )}



            <Text style={[styles.h1]}>Escolhidas para Você:</Text>



            {Web ? (
                <View style={styles.linha}>
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                </View>
            ) : (
                <View style={styles.linha}>
                    <Music />
                    <Music />
                    <Music />

                </View>
            )}



            <Text style={[styles.h1]}>Escutadas Recentemente:</Text>



            {Web ? (
                <View style={styles.linha}>
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                    <Music />
                </View>
            ) : (
                <View style={styles.linha}>
                    <Music />
                    <Music />
                    <Music />

                </View>
            )}





        </View>

    );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',

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

    linha: {

        flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 30
    },


    h1: {
        color: "white",
        fontSize: 20,
        padding: 10,
        marginBottom: -20,
        marginTop: 20,
        marginLeft: 10,
    }
});

