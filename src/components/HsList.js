import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Colors, Sizes, CommonStyles } from '../../lib/Constants';
import { SquircleView } from 'react-native-figma-squircle';

const HsList = props => {
    const Styles = StyleSheet.create({
        Fill: {
            flex: 1
        }
    });

    return (
        <SquircleView
            style={[Styles.Fill]}
            squircleParams={{
                cornerSmoothing: 1,
                cornerRadius: 18,
                fillColor:  props.darkTheme ? Colors.Dark : Colors.SlightGrey,
            }}>
            <View>
                {
                    (props.data && props.data.length > 0) ? <FlatList data={props.data} renderItem={props.renderItem}/> : GetMessage()
                }
            </View>
        </SquircleView>
    );
}

export default HsList;