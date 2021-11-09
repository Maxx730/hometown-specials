import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { Colors, Sizes, CommonStyles } from '../../lib/Constants';

const Styles = StyleSheet.create({
    ListSpacing: {

    },
    Item: {
        padding: Sizes.Large,
        marginBottom: Sizes.Medium
    }
});

const HsLocations = (props) => {
    const RenderItem = item => {
        const _item = item.item.data;
        return(
            <SquircleView
                style={[Styles.Item]} 
                squircleParams={{
                cornerSmoothing: 1,
                cornerRadius: 18,
                fillColor: Colors.Disabled,
            }}>
                <TouchableOpacity onPress={() => {
                    props.onChoose && props.onChoose(item.item);
                }}>
                    <Text>
                        {_item.title}
                    </Text>
                </TouchableOpacity>
            </SquircleView>
        )
    }

    return (
        <View>
            {
                props.locations && 
                <View style={[]}>
                    <FlatList style={[Styles.ListSpacing]} data={props.locations} renderItem={RenderItem}/>
                </View>
            }
        </View>
    )
}

export default HsLocations;