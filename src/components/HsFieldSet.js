import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { Colors, Sizes } from '../../lib/Constants';

const Styles = StyleSheet.create({
    Spacing: {
        paddingTop: Sizes.Small,
        paddingBottom: Sizes.Small
    },
    Header: {
        borderBottomColor: Colors.DividerGrey,
        borderBottomWidth: 1,
        marginBottom: Sizes.Medium,
        paddingBottom: Sizes.Small,
        marginLeft: Sizes.Large,
        marginRight: Sizes.Large
    },
    Title: {
        paddingLeft: Sizes.Medium,
        paddingRight: Sizes.Medium
    }
});

const HsFieldSet = (props) => {
    return (
        <View style={Styles.Spacing}>
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