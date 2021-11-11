import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';

import { Colors, Sizes } from '../lib/Constants';
import { GetAllSettings } from '../lib/Cache';
import { SearchLocation } from '../lib/Network';

import HsTextInput from '../src/components/HsTextInput';
import HsNavigation from '../src/components/HsNavigation';
import HsResults from '../src/components/HsResults';

const Search = (props) => {
    const [_error, setError] = useState(null);
    const [_settings, setSettings] = useState([]);
    const [_location, setLocation] = useState(null);

    useEffect(async () => {
        GetAllSettings().then(_settings => setSettings(_settings));

        if (!_location && !_error) {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Location permissions required.');
            }

            const { coords } = await Location.getCurrentPositionAsync();


            if (coords) {
                const { longitude, latitude } = coords;
                let locations = await Location.reverseGeocodeAsync({
                    latitude,
                    longitude
                });
                if (locations.length > 0) {
                    const _loc = locations[0];
                    setLocation(`${_loc.city}, ${_loc.region ? _loc.region : ''}`);
                }
            }
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
            paddingRight: Sizes.Large,
            minHeight: 64
        },
        Location: {
            paddingTop: Sizes.Medium,
            paddingBottom: Sizes.Medium,
            alignItems: 'center'
        },
        Results: {
            flex: 1
        },
        CityState: {
            color: _darkTheme ? Colors.Dark : Colors.SlightGrayer,
            fontSize: Sizes.FontSmall
        }
    });

    return (
        <View style={Styles.Background}>
            <HsNavigation hidden={true} darkTheme={_darkTheme}/>
            <View style={[Styles.Margin]}>
                <HsTextInput onChange={() => {

                }} icon={'search'} darkTheme={_darkTheme}/>
            </View>
            <View style={Styles.Results}>
                <HsResults/>
            </View>
            <View style={Styles.Location}>
                {_location && <Text style={Styles.CityState}>{_location}</Text>}
            </View>
        </View>
    );
}

export default Search;