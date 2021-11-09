import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { GetLocations } from '../lib/Network';
import { GetSetting } from '../lib/Cache';
import Loading from '../src/components/Loading';

import { CommonStyles, Labels, Colors } from '../lib/Constants';

import HsFieldSet from '../src/components/HsFieldSet';
import HsButton from '../src/components/HsButton';
import HsLocations from '../src/components/HsLocations';
import HsNavigation from '../src/components/HsNavigation';

const Styles = StyleSheet.create({
    Content: {
        height: '100%'
    },
    MarginTop: {
        paddingTop: 12
    }
});

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
        if (debug) {
            return (
                <View style={[CommonStyles.Flex, darkTheme && CommonStyles.DarkBackground]}>
                    <HsNavigation title={Labels.WELCOME} darkTheme={darkTheme} hideBack={true} extraButton={
                        {
                            icon: <Feather size={32} name='settings' color={darkTheme ? Colors.White : Colors.Black}/>,
                            onPress: () => {
                                props.navigation.navigate('Settings');
                            }
                        }
                    }/>

                </View>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <View style={Styles.Content}>
            {data.length > 0 ? RenderMainScreen(props, true, data) : <><Loading/></>}
        </View>
    );
}