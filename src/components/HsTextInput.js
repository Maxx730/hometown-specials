import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Colors, Sizes, Labels } from '../../lib/Constants';
import { SquircleView } from 'react-native-figma-squircle';
import { Feather } from '@expo/vector-icons';

const HsTextInput = (props) => {
    const Styles = StyleSheet.create({
        Spacing: {
            marginBottom: Sizes.Medium,
            flex: 1
        },
        Background: {
            paddingTop: Sizes.Medium,
            paddingBottom: Sizes.Medium,
            paddingLeft: Sizes.Medium,
            paddingRight: Sizes.Large,
            height: 64,
            color: Colors.White,
        },
        Title: {
            fontSize: Sizes.Medium
        },
        Header: {
            paddingLeft: Sizes.Large,
            paddingBottom: Sizes.Small
        },
        Frame :{
            width: '100%',
            minHeight: 64,
            flexDirection: 'row'
        },
        Icon: {
            paddingBottom: Sizes.Medium,
            height: '100%',
            paddingTop: Sizes.Medium + 3,
            paddingLeft: Sizes.Large
        }
    });

    const RenderIcon = () => {
        return (
            <View>
                <Feather style={Styles.Icon} size={32} name={props.icon} color={props.darkTheme ? Colors.White : Colors.Black}/>
            </View>
        );
    }

    return (
        <View style={Styles.Spacing}>
            <SquircleView
                style={[Styles.Frame]}
                squircleParams={{
                    cornerSmoothing: 1,
                    cornerRadius: 18,
                    fillColor: props.darkTheme ? Colors.Dark : Colors.SlightGrey,
                }}>
            {props.title && RenderTitle(props.title)}
            {props.icon && RenderIcon()}
            <TextInput
                placeholderTextColor={props.darkTheme ? Colors.Darker : Colors.Black}
                placeholder={props.title ? props.title : Labels.PLACEHOLDER}
                onChangeText={props.onChange}
                style={Styles.Background}
                value={props.value}
            />
            </SquircleView>
        </View>
    )
}

const RenderTitle = (title) => {
    return (
        <View style={Styles.Header}>
            <Text style={Styles.Title}>{title}</Text>
        </View>
    );
}

export default HsTextInput;