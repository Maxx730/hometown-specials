import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors, Sizes, Labels } from '../../lib/Constants';

import HsLoading from './HsLoading';

const HsResults = (props) => {
    const [_loading, setLoading] = useState(false)

    const Styles = StyleSheet.create({
        Fill: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.Primary
        },
        Message: {
            color: Colors.White,
            alignContent: 'center',
            flex: 1,
            justifyContent: 'center',
            alignSelf: 'center'
        }
    });

    return (
        <View style={Styles.Fill}>
            {
                props.loading ? <HsLoading/> : <Text style={Styles.Message}>{Labels.SEARCH_FOR_LOCATION}</Text>
            }
        </View>
    )
}

export default HsResults;