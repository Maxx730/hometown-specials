import React from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';
import { Colors, Sizes, Labels } from '../../lib/Constants';

const HsLoading = (props) => {
    const Styles = StyleSheet.create({
        Fill: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        }
    });

    return (
        <View style={Styles.Fill}>
            <ActivityIndicator size={32} color={Colors.Primary}/>
        </View>
    );
}

export default HsLoading;