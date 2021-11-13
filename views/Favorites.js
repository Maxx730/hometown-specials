import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Colors } from '../lib/Constants';
import { GetAllSettings } from '../lib/Cache';

import HsNavigation from '../src/components/HsNavigation';

const Favorites = (props) => {
    const [_loadedSettings, setLoadedSettings] = useState(false);
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
            backgroundColor: darkTheme ? Colors.Darkest : Colors.SlightGray,
            flex: 1
        }
    });

    return (
        <View style={[
            Styles.Background
        ]}>
            <HsNavigation darkTheme={darkTheme}/>
        </View>
    );
}

export default Favorites;