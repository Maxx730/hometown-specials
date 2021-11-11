import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Labels, Sizes, Colors } from '../lib/Constants';
import { GetSetting, SetSetting } from '../lib/Cache';

import HsSection from '../src/components/HsSection';
import HsNavigation from '../src/components/HsNavigation';
import HsPreferenceItem from '../src/components/HsPreferenceItem';

const Settings = (props) => {
    const [initialLoad, setInitialLoad] = useState(false);

    const [deviceTheme, setDeviceTheme] = useState(null);
    const [darkTheme, setDarkTheme] = useState(null);
    const [useLocation, setUseLocation] = useState(null);

    useEffect(() => {
        if (!initialLoad) {
            GetSetting('DeviceTheme').then(_val => setDeviceTheme(JSON.parse(_val)));
            GetSetting('DarkTheme').then(_val => setDarkTheme(JSON.parse(_val)));
            GetSetting('UseLocation').then(_val => setUseLocation(JSON.parse(_val)));
            
            setInitialLoad(true);
        }
    });

    const Styles = StyleSheet.create({
        Content: {
            height: Sizes.PercentFull
        },
        DarkBackground: {
            backgroundColor: Colors.Darkest
        }
    });

    const SetPreference = (name, val) => {
        SetSetting(name, val);

        switch (name) {
            case 'DeviceTheme':
                setDeviceTheme(val);
            case 'DarkTheme':
                setDarkTheme(val);
            case 'UseLocation':
                setUseLocation(val);
        }

        props.route.params._refresh && props.route.params._refresh();
    }

    return (
        <View style={[Styles.Content, darkTheme && Styles.DarkBackground]}>
            <HsNavigation darkTheme={darkTheme} title={Labels.PREFERENCES} navigation={props.navigation}/>
            <HsSection darkTheme={darkTheme} title={Labels.PREFERENCES_DISPLAY}>
                <HsPreferenceItem darkTheme={darkTheme} label={'Use Device Theme'} type={'boolean'} value={deviceTheme} odd={true} onChange={val => SetPreference('DeviceTheme', val)}/>
                <HsPreferenceItem darkTheme={darkTheme} label={Labels.DARK_THEME} type={'boolean'} value={darkTheme} onChange={val => SetPreference('DarkTheme', val)} disabled={deviceTheme}/>
            </HsSection>
            <HsSection darkTheme={darkTheme} title={Labels.LOCATION}>
                <HsPreferenceItem darkTheme={darkTheme} label={'Use Location'} type={'boolean'} value={useLocation} odd={true} onChange={val => SetPreference('UseLocation', val)}/>
            </HsSection>
        </View>
    );
}

export default Settings;