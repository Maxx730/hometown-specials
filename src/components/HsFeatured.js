import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';

import { SquircleView } from 'react-native-figma-squircle';

import { Colors, CommonStyles, Sizes } from '../../lib/Constants';

const Pizza = require('../../assets/featured/pizza.jpg');

const HsFeatured = (props) => {
    const Styles = StyleSheet.create({
        Background: {
            height: Sizes.PercentFull
        },
        Image: {
            height: Sizes.FeaturedMedium
        },
        Mask: {
            position: 'absolute',
            width: '100%',
            height: Sizes.FeaturedMedium,
            backgroundColor: Colors.Primary,
            opacity: .5
        }
    });

    return (
        <MaskedView
        maskElement={
            <SquircleView
            style={Styles.Background}
            squircleParams={{
                cornerSmoothing: 1,
                cornerRadius: 18,
                fillColor: props.darkTheme ? Colors.Dark : Colors.SlightGrey,
            }}
            />
        }>
            <Image style={Styles.Image} source={Pizza}/>
            <View style={Styles.Mask}/>
        </MaskedView>
    );
}

export default HsFeatured;