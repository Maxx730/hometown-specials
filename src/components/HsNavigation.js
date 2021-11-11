import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SquircleView } from 'react-native-figma-squircle';
import { StatusBar } from 'expo-status-bar';

import { Sizes, Colors, CommonStyles } from '../../lib/Constants';

const HsNavigation = (props) => {
    const Styles = StyleSheet.create({
        StatusBar: {
            marginTop: '15%'
        },
        Margin: {
            marginLeft: Sizes.Large,
            marginRight: Sizes.Large
        },
        Header: {
            flexDirection: 'row',
            minHeight: props.hidden ? 0 : 58
        },
        BackButton: {
            padding: Sizes.Medium
        },
        Title: {
            fontSize: Sizes.FontSmall,
            alignContent: 'center',
            alignSelf: 'center',
            marginLeft: Sizes.Medium
        },
        Middle: {
            flex: 1,
            flexDirection: 'row',
            marginLeft: !props.hideBack ? Sizes.Medium : 0,
            marginRight: props.extraButton ? Sizes.Medium : 0,
            padding: Sizes.Medium
        }
    });

    const GetExtraButton = () => {
        return (
            <TouchableOpacity onPress={props.extraButton.onPress}>
                <SquircleView
                    style={[Styles.BackButton]}
                    squircleParams={{
                        cornerSmoothing: 1,
                        cornerRadius: 18,
                        fillColor: props.darkTheme ? Colors.Dark : Colors.SlightGrey,
                    }}
                >
                    {props.extraButton.icon}
                </SquircleView>
            </TouchableOpacity>
        );
    }

    const GetBackButton = (navigation) => {
        return (
            <TouchableOpacity onPress={navigation.goBack}>
                <SquircleView
                    style={[Styles.BackButton]}
                    squircleParams={{
                        cornerSmoothing: 1,
                        cornerRadius: 18,
                        fillColor: props.darkTheme ? Colors.Dark : Colors.SlightGrey,
                    }}
                >
                    <Feather color={props.darkTheme ? Colors.White : Colors.Black} size={Sizes.Larger} name='arrow-left'/>
                </SquircleView>
            </TouchableOpacity>
        )
    }
    
    const GetTitle = () => {
        return (
            <SquircleView
                style={[Styles.Middle]}
                squircleParams={{
                    cornerSmoothing: 1,
                    cornerRadius: 18,
                    fillColor: props.darkTheme ? Colors.Dark : Colors.SlightGrey,
                }}
            >
                {props.icon && props.icon}
                <Text style={[Styles.Title, props.darkTheme ? CommonStyles.WhiteText : CommonStyles.BlackText]}>
                    {props.title && props.title}
                </Text>
            </SquircleView>
        )
    }

    return (
        <>
            <View style={Styles.StatusBar}>
                <StatusBar style={props.darkTheme ? 'light' : 'dark'}/>
            </View>
            <View style={[Styles.Margin, Styles.Header]}>
                {(!props.hideBack && props.navigation) && GetBackButton(props.navigation)}
                {!props.hidden && GetTitle()}
                {props.extraButton && GetExtraButton()}
            </View>
        </>
    );
}

export default HsNavigation;