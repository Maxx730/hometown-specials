import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Modal } from 'react-native';
import { GetLocation } from '../lib/Network';
import Loading from '../src/components/Loading';

import { Colors, Sizes, Labels } from '../lib/Constants';

import HsTextInput from '../src/components/HsTextInput';
import HsFieldSet from '../src/components/HsFieldSet';
import HsButton from '../src/components/HsButton';
import HsModal from '../src/components/HsModal';

const Styles = StyleSheet.create({
    ScrollContent: {
        paddingTop: Sizes.Large,
        paddingBottom: Sizes.Largest,
        paddingLeft: Sizes.Large,
        paddingRight: Sizes.Large
    },
    Content: {
        height: '100%'
    },
    MarginTop: {
        paddingTop: 12
    }
});

const LocationAdmin = (props) => {
    const [confirm, setConfirm] = useState(true);
    const [loaded,setLoaded] = useState(false);
    const _props = props.route.params;
    const [name,setName] = useState(null)
    const [street,setStreet] = useState(null)
    const [city,setCity] = useState(null)
    const [state,setState] = useState(null)
    const [zip,setZip] = useState(null)

    useEffect(() => {
        if (!_props.id) {
            setLoaded(true);
        } else {
            if (!loaded) {
                GetLocation(_props.id).then(data => {
                    setName(data.title);
                    setStreet(data.location.street);
                    setCity(data.location.city);
                    setState(data.location.state);
                    setZip(data.location.zip);
                    setLoaded(true);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    });

    const RenderLocationFields = (values, methods, props) => {
        return (
            <>
                {
                    confirm && <HsModal negative_action={() => setConfirm(false)} title={Labels.CONFIRM_CHANGES} message={Labels.CONFIRM_MESSAGE}/>
                }
                <ScrollView style={Styles.ScrollContent}>
                    <View style={{
                        height: Sizes.Largest
                    }}/>
                    <HsFieldSet title={Labels.GENERAL}>
                        <HsTextInput onChange={methods[0]} value={values[0]} title={Labels.LOCATION_NAME}/>
                    </HsFieldSet>
                    <HsFieldSet title={Labels.ADDRESS}>
                        <HsTextInput onChange={methods[1]} title={Labels.STREET} value={values[1]}/>
                        <HsTextInput onChange={methods[2]} title={Labels.CITY} value={values[2]}/>
                        <HsTextInput onChange={methods[3]} title={Labels.STATE} value={values[3]}/>
                        <HsTextInput onChange={methods[4]} title={Labels.ZIP} value={values[4]}/>
                    </HsFieldSet>
                    <HsFieldSet>
                        <HsButton margin={props.id} onPress={() => setConfirm(true)} label={props.id ? Labels.SAVE : Labels.ADD}/>
                        {
                            props.id && <HsButton label={Labels.DELETE} type='danger'/>
                        }
                        <View style={{
                            height: Sizes.Largest
                        }}/>
                    </HsFieldSet>
                </ScrollView>
            </>
        )
    }

    return (
        <View style={Styles.Content}>
            {loaded ? RenderLocationFields([name,street,city,state,zip], [setName,setStreet,setCity,setState,setZip], _props) : <Loading/>}
        </View>
    );
}

export default LocationAdmin;