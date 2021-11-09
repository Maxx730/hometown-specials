import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

import { Sizes, Colors, CommonStyles } from '../../lib/Constants';

const HsPreferenceItem = props => {
    const Styles = StyleSheet.create({
        Item: {
            flexDirection: 'row',
            paddingTop: Sizes.Medium,
            paddingBottom: Sizes.Medium
        },
        ItemOdd: {
            backgroundColor: props.darkTheme ? Colors.Darker : Colors.SlightGrayer
        },
        ItemLabel: {
            flex: 1,
            paddingLeft: Sizes.Large,
            paddingRight: Sizes.Large,
            alignSelf: 'center'
        },
        ItemAction: {
            marginRight: Sizes.Medium
        }
    });

    const RenderPreferenceType = (type, value, onChange) => {
        switch (type) {
            case 'boolean':
                return <Switch disabled={props.disabled} value={value} onValueChange={onChange}/>
            default:
                return <View></View>
        }
    }

    return (
        <View style={[Styles.Item,props.odd && Styles.ItemOdd]}>
            <Text style={[Styles.ItemLabel, props.darkTheme ? CommonStyles.WhiteText : CommonStyles.BlackText]}>
                {props.value}
                {props.label ? props.label : 'Preference Label'}
            </Text>
            <View style={Styles.ItemAction}>
                {RenderPreferenceType(props.type, props.value, props.onChange)}
            </View>
        </View>
    );
}

export default HsPreferenceItem;