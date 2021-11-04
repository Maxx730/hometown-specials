import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { GetLocations } from '../lib/Network';
import { ClearCachedData, CacheExists, GetCachedData, SaveCache } from '../lib/Cache';
import Loading from '../src/components/Loading';
import Locations from '../src/components/Locations';

const Styles = StyleSheet.create({
    Content: {
        padding: 24,
        height: '100%'
    },
    MarginTop: {
        paddingTop: 12
    }
});

export default function Main(props) {
    const [data, setData] = useState([]);
    const [cacheDisabled, setCacheDisable] = useState(false);

    useEffect(() => {
        if (data.length == 0) {
            GetLocations().then(_locations => {
                setData(_locations);
            });
        }
    });

    return (
        <View style={Styles.Content}>
            {data.length > 0 ? RenderMainScreen(props, true, cacheDisabled, setCacheDisable, data) : <><Loading/></>}
        </View>
    );
}

function RenderMainScreen(props, debug, cacheDisabled, setCacheDisable, data) {
    if (debug) {
        return (
            <View>
                <Button disabled={cacheDisabled} onPress={(event) => {
                    ClearCachedData();
                    setCacheDisable(true);
                }} title="Reset Cache"/>
                <View style={Styles.MarginTop}>
                    <Button onPress={() => {
                        props.navigation.navigate('Details');
                    }} title="Details"/>
                </View>
                <View style={Styles.MarginTop}>
                    <Button title="Location [Admin]" style={Styles.MarginTop} onPress={() => {
                        props.navigation.navigate('Location [Admin]', {
                            id: data[0]
                        });
                    }}/>
                </View>
                <View style={Styles.MarginTop}>
                    <Locations data={data}/>
                </View>
            </View>
        )
    } else {
        return (<></>)
    }
}