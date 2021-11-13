import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GetLocations } from '../lib/Network';
import { GetSetting, GetAllSettings } from '../lib/Cache';
import Loading from '../src/components/Loading';

import HsNavigation from '../src/components/HsNavigation';

import { CommonStyles, Labels, Colors, Sizes } from '../lib/Constants';

const Tabs = createBottomTabNavigator();

export default function Main(props) {
    const [_loadedSettings, setLoadedSettings] = useState(false);
    const [data, setData] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (!_loadedSettings) {
            GetAllSettings().then(_settings => {
                setDarkTheme(_settings[0] ? _settings[0][1] : false);
                setLoadedSettings(true);
            });
        }
    });

    const Styles = StyleSheet.create({
        Background: {
            height: '100%',
            flex: 1,
            backgroundColor: darkTheme ? Colors.Darkest : Colors.SlightGray
        },
        MarginTop: {
            paddingTop: 12
        },
        Content: {
            padding: Sizes.Large,
            flex: 1
        }
    });

    const RenderMainScreen = (props, debug, data) => {
        return (
            <View style={Styles.Background}>

            </View>
        )
    }

    return (
        <View style={Styles.Background}>
            <HsNavigation darkTheme={darkTheme} hideBack title="Home"/>
        </View>
    );
}