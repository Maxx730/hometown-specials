import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';

import { Colors, Sizes, Labels } from '../../lib/Constants';

import HsButton from './HsButton';
import HsSpinner from './HsSpinner';

const Styles = StyleSheet.create({
    Shade: {
        backgroundColor: Colors.Shade,
        height: Sizes.PercentFull,
        width: Sizes.PercentFull,
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    Background: {
        minHeight: 100,
        shadowColor: Colors.Black,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.75,
        shadowRadius: 4,
        elevation: 1
    }, 
    Margin: {
        margin: Sizes.Medium
    },
    Padding: {
        padding: Sizes.Largest
    },
    Heading: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.SlightGrey,
        paddingTop: Sizes.Medium,
        paddingBottom: Sizes.Medium,
        paddingLeft: Sizes.Large,
        paddingRight: Sizes.Large
    },
    Title: {
        fontSize: Sizes.Large
    },
    Bottom: {
        borderTopWidth: 1,
        borderTopColor: Colors.SlightGrey,
        padding: Sizes.Small,
        flexDirection: 'row'
    },
    Content: {
        padding: Sizes.Large
    },
    Filler: {
        flex: 1
    },
    Gradient: {
        width: Sizes.PercentFull,
        height: Sizes.PercentFull,
        position: 'absolute'
    }
})

 const HsModal = (props) => {
    return (
        <>
            <View style={Styles.Shade}>

            </View>
            <Modal
                animationType={'fade'}
                visible={true}
                transparent={true}
            >
                <View style={Styles.Shade}>
                    <View style={Styles.Filler}>

                    </View>
                    <SquircleView
                        style={[Styles.Margin, Styles.Background]}
                        squircleParams={{
                            cornerSmoothing: 1,
                            cornerRadius: 24,
                            fillColor: Colors.White
                        }}
                    >
                        {
                            !props.loader &&
                            <>
                                <View style={Styles.Heading}>
                                    <Text style={Styles.Title}>
                                        {props.title ? props.title : Labels.MODAL_TITLE_DEFAULT}
                                    </Text>
                                </View>
                                <View style={Styles.Content}>
                                    <Text>
                                        {props.message ? props.message : Labels.MODAL_MESSAGE_DEFAULT}
                                    </Text>
                                </View>
                                <View style={Styles.Bottom}>
                                    <HsButton onPress={props.negative_action} horizontal style={{marginRight: Sizes.Small / 2}} type='danger' label={Labels.CANCEL}/>
                                    <HsButton onPress={props.positive_action} horizontal style={{marginLeft: Sizes.Small / 2}} label={Labels.CONFIRM}/>
                                </View>
                            </>
                        }
                        {
                            props.loader && 
                            <>
                                <HsSpinner message={'Please Wait'}/>
                            </>
                        }
                    </SquircleView>
                </View>
            </Modal>
        </>
    );
 }

 export default HsModal;