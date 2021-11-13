import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Location from 'expo-location';

import { Colors, Sizes, Labels } from '../lib/Constants';
import { GetAllSettings } from '../lib/Cache';
import { SearchLocation } from '../lib/Network';
import Data from '../lib/MockPlaces';

import HsTextInput from '../src/components/HsTextInput';
import HsNavigation from '../src/components/HsNavigation';
import HsResults from '../src/components/HsResults';
import HsButton from '../src/components/HsButton';

const Search = (props) => {
    const [_error, setError] = useState(null);
    const [_settings, setSettings] = useState([]);
    const [_location, setLocation] = useState(null);
    const [_loading, setLoading] = useState(true);
    const [_loadingMessage, setLoadingMessage] = useState(Labels.RETRIEVING_LOCATION);
    const [_latLong, setLatLong] = useState(null);

    useEffect(async () => {
        if (_settings.length === 0) {
            GetAllSettings().then(_settings => setSettings(_settings));
        }

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
                    setLatLong({
                        lat: latitude,
                        long: longitude
                    });
                    setLoading(false);
                    setLoadingMessage('');
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
            flex: 1,
            marginLeft: Sizes.Large,
            marginRight: Sizes.Large
        },
        SearchMessage: {
            color: Colors.DarkPlaceholder,
            padding: Sizes.Medium
        },
        CityState: {
            color: _darkTheme ? Colors.DarkPlaceholder : Colors.DarkPlaceholder,
            fontSize: Sizes.FontSmall
        },
        SearchButton: {

        }
    });

    const OnSearchTyped = value => {
        if (_latLong) {
            setLoading(true);
        }
    }

    const GetSearchButton = () => {
        return (
            <View>
                <Text style={Styles.SearchMessage}>{Labels.NOT_FOUND}</Text>
                <HsButton icon={<Feather color={Colors.White} name='search' size={24}/>} label={'Search'}></HsButton>
            </View>
        )
    }

    return (
        <View style={Styles.Background}>
            <HsNavigation hidden={true} darkTheme={_darkTheme}/>
            <View style={[Styles.Margin]}>
                <HsTextInput onChange={OnSearchTyped} icon={'search'} darkTheme={_darkTheme}/>
            </View>
            <View style={[Styles.Margin, Styles.SearchButton]}>
                {GetSearchButton()}
            </View>
            <View style={Styles.Results}>
                <HsResults title={'Results'} darkTheme={_darkTheme} data={Data} loadingMessage={_loadingMessage} loading={_loading}/>
            </View>
            <View style={Styles.Location}>
                <Text style={Styles.CityState}>{_location ? _location : '...'}</Text>
            </View>
        </View>
    );
}

export default Search;