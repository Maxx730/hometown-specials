import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, Sizes, CommonStyles } from '../../lib/Constants';
import { SquircleView } from 'react-native-figma-squircle';

const Styles = StyleSheet.create({
    Squircle: {
        width: Sizes.PercentFull,
        height: Sizes.HsButtonHeight
    },
    Background: {
        paddingTop: Sizes.Large,
        paddingBottom: Sizes.Large
    },
    Label: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    Margin: {
        marginBottom: Sizes.Medium
    }
});

const HsButton = (props) => {
    return (
        <View style={[props.margin && Styles.Margin, props.style, props.horizontal && CommonStyles.Flex]}>
            <SquircleView
                style={Styles.Squircle}
                squircleParams={{
                    cornerSmoothing: 1,
                    cornerRadius: 18,
                    fillColor: GetButtonColor(props.type),
                }}
            >
                <TouchableOpacity disabled={props.type === 'disabled'} style={Styles.Background} onPress={props.onPress}>
                    <Text style={[Styles.Label, {
                        color: GetTextColor(props.type)
                    }]}>
                        {props.label}
                    </Text>
                </TouchableOpacity>
            </SquircleView>
        </View>
    )
}

const GetButtonColor = (type) => {
    switch (type) {
        case undefined:
            return Colors.Primary
        case 'danger':
            return Colors.Danger
        case 'disabled':
            return Colors.Disabled
    }
}

const GetTextColor = (type) => {
    if (type == 'disabled') {
        return Colors.DisabledTextColor
    }  else {
        return Colors.White
    }
}

const GetSize = (size) => {
    switch(size) {
        case 'small':
            return Sizes.Small
        case 'large':
            return Sizes.Large
        default: 
            return Sizes.Medium
    }
}

export default HsButton;