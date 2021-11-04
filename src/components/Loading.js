import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Styles = StyleSheet.create({
    Loading: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    Center: {
        textAlign: 'center'
    }
});

export default function Loading() {
    return (
        <View style={Styles.Loading}>
            <Text style={Styles.Center}>Loading...</Text>
        </View>
    )
}