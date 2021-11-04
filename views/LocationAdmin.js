import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';
import { GetLocation } from '../lib/Network';
import Loading from '../src/components/Loading';

import HsTextInput from '../src/components/HsTextInput';
import HsFieldSet from '../src/components/HsFieldSet';

const LocationAdmin = (props) => {
    const [location, setLocation] = useState(null);
    const _props = props.route.params;

    const Styles = StyleSheet.create({
        Content: {
            padding: 24,
            height: '100%'
        },
        MarginTop: {
            paddingTop: 12
        }
    })    

    useEffect(() => {
        if (!location) {
            GetLocation(_props.id).then(data => {
                setLocation(data);
            });
        }
    });

    return (
        <View style={Styles.Content}>
            {location ? RenderLocationFields(location) : <Loading/>}
        </View>
    );
}

const RenderLocationFields = (location) => {
    return (
        <View>
            <HsFieldSet>
                <HsTextInput value={location.title} title={'Location Name'}/>
            </HsFieldSet>
            <HsFieldSet title='Address'>
                <HsTextInput value={location.location.street}/>
                <HsTextInput value={location.location.city}/>
                <HsTextInput value={location.location.state}/>
                <HsTextInput value={location.location.zip}/>
            </HsFieldSet>
            <HsFieldSet title='Hours'>
                <HsTextInput value={location.location.street}/>
                <HsTextInput value={location.location.city}/>
                <HsTextInput value={location.location.state}/>
                <HsTextInput value={location.location.zip}/>
            </HsFieldSet>
        </View>
    )
}

export default LocationAdmin;