import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import { Colors, Sizes } from '../lib/Constants';
import { GetAllSettings } from '../lib/Cache';
import { SearchLocation } from '../lib/Network';

import HsTextInput from '../src/components/HsTextInput';
import HsNavigation from '../src/components/HsNavigation';

const Search = (props) => {
    const [_settings, setSettings] = useState([]);

    useEffect(() => {
        SearchLocation('').then(_resp => console.log('dfsafds'));
        if (_settings.length === 0) {
            GetAllSettings().then(_settings => {
                setSettings(_settings);
            });

        }
    });

    const _darkTheme = _settings[0] ? _settings[0][1] : false;

    const Styles = StyleSheet.create({
        Background: {
            backgroundColor: _darkTheme ? Colors.Darkest : Colors.SlightGray,
            height: '100%',
            flex: 1
        },
        Margin: {
            paddingLeft: Sizes.Large,
            paddingRight: Sizes.Large
        }
    });

    return (
        <View style={Styles.Background}>
            <HsNavigation hidden={true} darkTheme={_darkTheme}/>
            <View style={[Styles.Margin]}>
                <HsTextInput icon={'search'} darkTheme={_darkTheme}/>
            </View>
        </View>
    );
}

export default Search;