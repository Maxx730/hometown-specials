import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { Colors, Sizes } from '../../lib/Constants';

const Styles = StyleSheet.create({
    Spacing: {
        paddingTop: Sizes.Small,
        paddingBottom: Sizes.Small
    },
    Header: {
        marginBottom: Sizes.Medium,
        paddingBottom: Sizes.Small,
        marginLeft: Sizes.Large,
        marginRight: Sizes.Large
    },
    Title: {
        fontWeight: 'bold'
    },
    Horizontal: {
        flexDirection: 'row'
    }
});

const HsFieldSet = (props) => {
    return (
        <View style={[Styles.Spacing]}>
            {props.title && RenderHeader(props.title)}
            {props.children}
        </View>
    )
}

const RenderHeader = (title) => {
    return (
        <View style={Styles.Header}>
            <Text style={Styles.Title}>{title}</Text>
        </View>
    )
}

export default HsFieldSet;