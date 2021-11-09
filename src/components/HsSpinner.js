import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Colors, Sizes } from '../../lib/Constants';

const Styles = StyleSheet.create({
    Flex: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    Message: {
        textAlign: 'center',
        color: Colors.Black,
        textTransform: 'uppercase',
        margin: Sizes.Small,
        fontSize: Sizes.Small
    }
})

const HsSpinner = (props) => {
    return (
        <View style={Styles.Flex}>
            <ActivityIndicator size='small' color={Colors.Primary}/>
            {
                props.message && <Text style={Styles.Message}>{props.message}...</Text>
            }
        </View>
    )
}

export default HsSpinner;