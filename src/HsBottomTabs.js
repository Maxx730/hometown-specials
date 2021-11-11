import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { SquircleView } from 'react-native-figma-squircle';

import { Colors, Sizes } from '../lib/Constants';

const HsBottomTabs = (props) => {
    const Styles = StyleSheet.create({
        Background: {
            height: 100,
            flexDirection: 'row',
            backgroundColor: Colors.Primary
        },
        BottomSection: {
            flex: 1,
            margin: Sizes.Medium
        }
    });

    const GetSection = (icon) => {
        return (
            <SquircleView
            style={Styles.BottomSection}
            squircleParams={{
                cornerSmoothing: 1,
                cornerRadius: 18,
                fillColor: Colors.SlightGrey,
            }}
            >

            </SquircleView>
        );
    }

    return (
        <View>
            <View
            style={Styles.Background}
            >
                {GetSection()}
                {GetSection()}
                {GetSection()}
            </View>
        </View>
    );
}

export default HsBottomTabs;