
import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';



export default function Music() {

    const { width } = useWindowDimensions();
    const computs = width > 1000;
 

    return (

        <Link href="/">
            <View style={[styles.musica]}>
                <Image source={require('../assets/images/images.jpeg')} style={[styles.img, {width: computs ? 160 : 90}, {height: computs ? 160 : 90} ]} />
                <Text style={[styles.texto, {fontSize: computs ? 20 : 10},]}>Identidade</Text>
            </View>
        </Link>
    );
}

const styles = StyleSheet.create({
    
    img: {

        // width: 90,
        // height: 90,
        margin: 5,
        borderRadius: 20,
        marginBottom: 10,


    },

    musica: {
        borderBottomColor: '#990099',
        borderBottomWidth: 2,

        borderLeftColor: '#990099',
        borderLeftWidth: 2,

        borderRightColor: '#990099',
        borderRightWidth: 2,

        borderTopColor: '#990099',
        borderTopWidth: 2,

        borderRadius: 20,
        padding: 5

    },
    texto: {
        color: "white",
        textAlign: 'center'

    },

});
