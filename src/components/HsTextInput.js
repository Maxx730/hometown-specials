import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { Colors, Sizes } from '../../lib/Constants';

const Styles = StyleSheet.create({
    Spacing: {
        marginBottom: Sizes.Medium
    },
    Background: {
        backgroundColor: Colors.SlightGrey,
        paddingTop: Sizes.Medium,
        paddingBottom: Sizes.Medium,
        paddingLeft: Sizes.Large,
        paddingRight: Sizes.Large,
        borderRadius: Sizes.Medium
    },
    Title: {
        fontSize: Sizes.Medium
    },
    Header: {
        paddingLeft: Sizes.Large,
        paddingBottom: Sizes.Small
    }
});

const HsTextInput = (props) => {
    return (
        <View style={Styles.Spacing}>
            {props.title && RenderTitle(props.title)}
            <TextInput
                style={Styles.Background}
                value={props.value}
            />
        </View>
    )
}

const RenderTitle = (title) => {
    return (
        <View style={Styles.Header}>
            <Text style={Styles.Title}>{title}</Text>
        </View>
    );
}

export default HsTextInput;