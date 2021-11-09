import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';

import { Colors, CommonStyles, Sizes } from '../../lib/Constants';

const Styles = StyleSheet.create({
    Margin: {
        marginLeft: Sizes.Large,
        marginRight: Sizes.Large,
        marginTop: Sizes.Medium
    },
    Background: {
        minHeight: 100,
        paddingBottom: Sizes.Large
    },
    Title: {
        paddingTop: Sizes.Medium,
        paddingBottom: Sizes.Medium,
        paddingLeft: Sizes.Large,
        paddingRight: Sizes.Large,
        fontSize: Sizes.FontMedium,
        fontWeight: 'bold'                                  
    }
});

const HsSection = (props) => {
    return (
        <SquircleView
            style={[Styles.Margin, Styles.Background]}
            squircleParams={{
                cornerSmoothing: 1,
                cornerRadius: 18,
                fillColor:  props.darkTheme ? Colors.Dark : Colors.SlightGrey,
            }}
        >
            {props.title && <Text style={[Styles.Title, props.darkTheme ? CommonStyles.WhiteText : CommonStyles.BlackText]}>{props.title}</Text>}
            {props.children}
        </SquircleView>
    );
}

export default HsSection;