import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Colors, Sizes, Labels } from '../../lib/Constants';
import { SquircleView } from 'react-native-figma-squircle';
import { Feather } from '@expo/vector-icons';

import HsLoading from './HsLoading';
import HsList from './HsList';

const HsResults = (props) => {
    const [_loading, setLoading] = useState(false)

    const Styles = StyleSheet.create({
        Fill: {
            flex: 1
        },
        Message: {
            color: props.darkTheme ?  Colors.White : Colors.DarkPlaceholder,
            marginLeft: Sizes.Large,
            fontSize: Sizes.FontMedium
        },
        Title: {
            paddingTop: Sizes.Medium,
            paddingBottom: Sizes.Medium
        },
        Item: {
            flexDirection: 'row',
            padding: Sizes.Large
        },
        ItemInfo: {
            flex: 1
        },
        ItemTextColor: {
            color: props.darkTheme ? Colors.White : Colors.Black
        },
        ItemName: {
            fontSize: Sizes.FontMedium
        },
        ItemAdress: {
            fontSize: Sizes.FontSmall
        },
        ItemIcon: {
            justifyContent: 'center',
        }
    });

    const GetTitle = () => {
        return (
            <View style={Styles.Title}>
                <Text style={Styles.Message}>
                    {props.title}
                </Text>
            </View>
        )
    }

    const GetMessage = () => {
        return (
            <View>
                <Text style={Styles.Message}>{props.loadingMessage}</Text>
            </View>
        );
    }

    const RenderResult = item => {
        const _item = item.item;
        const _idx = item.index;

        return (
            <TouchableOpacity style={[Styles.Item]} key={`location-${item.key}`}>
                <View style={[Styles.ItemInfo]}>
                    <Text style={[Styles.ItemTextColor, Styles.ItemName]}>{_item.name}</Text>
                    <Text style={[Styles.ItemTextColor, Styles.ItemAdress]}>{`${_item.address}`}</Text>
                </View>
                <View style={[Styles.ItemIcon]}>
                    <Feather color={props.darkTheme ? Colors.White : Colors.Black} size={32} name='chevron-right'/>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={Styles.Fill}>
            {
                props.title && GetTitle()
            }
                {
                    (props.data && props.data.length > 0) ? <HsList darkTheme={props.darkTheme} data={props.data ? props.data : []} renderItem={RenderResult}/> : GetMessage()
                }

        </View>
    )
}

export default HsResults;