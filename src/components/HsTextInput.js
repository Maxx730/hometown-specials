import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Colors, Sizes, Labels } from '../../lib/Constants';

const Styles = StyleSheet.create({
    Spacing: {
        marginBottom: Sizes.Medium,
        flex: 1
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
                placeholder={props.title ? props.title : Labels.PLACEHOLDER}
                onChangeText={props.onChange}
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