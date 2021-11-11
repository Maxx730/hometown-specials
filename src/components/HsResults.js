import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors, Sizes, Labels } from '../../lib/Constants';

import HsLoading from './HsLoading';

const HsResults = (props) => {
    const Styles = StyleSheet.create({
        Fill: {
            flex: 1
        }
    });

    return (
        <View style={Styles.Fill}>
            <HsLoading/>
        </View>
    )
}

export default HsResults;