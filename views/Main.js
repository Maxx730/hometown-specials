import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GetLocations } from '../lib/Network';
import { GetSetting } from '../lib/Cache';
import Loading from '../src/components/Loading';

import { CommonStyles, Labels, Colors, Sizes } from '../lib/Constants';


const Styles = StyleSheet.create({
    Background: {
        height: '100%',
        flex: 1
    },
    MarginTop: {
        paddingTop: 12
    },
    Content: {
        padding: Sizes.Large,
        flex: 1
    }
});

const Tabs = createBottomTabNavigator();

export default function Main(props) {
    const [data, setData] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (data.length == 0) {
            GetLocations().then(_locations => {
                setData(_locations);
            });
        }

        GetSetting('DarkTheme').then(_val => {
            setDarkTheme(_val);
        });
    });

    const RenderMainScreen = (props, debug, data) => {
        return (
            <View>

            </View>
        )
    }

    return (
        <View style={Styles.Background}>
            {data.length > 0 ? RenderMainScreen(props, true, data) : <><Loading/></>}
        </View>
    );
}