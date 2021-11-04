import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

const Locations = (props) => {
    const RenderLocation = (location) => {
        return (
            <View>
                <Text>
                    
                </Text>
            </View>
        )
    }

    return (
        <View>
            <Text>
                Locations
            </Text>
            <View>
                <FlatList renderItem={RenderLocation} data={props.data}/>
            </View>
        </View>
    );
}

export default Locations;