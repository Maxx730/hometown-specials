import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Event } from 'expo-analytics';

//Import Styles
import Styles from "../../lib/Styles";

//Import Utilities
import { _countDeals, _getDealsForDay } from "../../lib/Utils";

class Locations extends React.Component {
    render() {
        const locations = _getDealsForDay(this.props.data, this.props.day, this.props.onlyShowDeals || false);
        if(locations.length === 0) {
            return(
                <View style={[Styles.NoResults]}>
                    <Text style={[{
                        textAlign: 'center'
                    }]}>Unfortunatly it does not look like we have any data on the location you are looking for.</Text>
                </View>
            )
        } else {
        return(
            <View style={[Styles.LocationList,{

            }]}>
                <FlatList
                style={[{

                }]} data={locations} renderItem={({item,index}) => {
                    return(
                        <TouchableOpacity onPress={() => {
                            this.props.setFocused && this.props.setFocused(item)
                        }} style={[Styles.LocationItem,index === 0 && Styles.ItemTop,index === this.props.data.length - 1 && Styles.ItemBottom]}>
                            <View style={[{
                                flex: 1
                            }]}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text style={[{
                                        textAlignVertical: 'center',
                                        paddingTop: Platform.OS === 'ios' ? 6 : 0,
                                        fontWeight: 'bold',
                                        fontSize: 18
                                    }]}>
                                        {item.name}
                                    </Text>
                                    <View style={{
                                        paddingLeft: 6,
                                        paddingTop: 8,
                                        flexDirection: 'row'
                                    }}>
                                        {item.delivering && <Feather name={'truck'}/>}
                                        {item.takeout && <View style={{marginLeft: 3}}><Feather name={'shopping-bag'}/></View>}
                                    </View>
                                </View>
                                <Text style={[{
                                    flex: 1,
                                    textAlignVertical: 'center',
                                    fontSize: 12,
                                    color: '#808080'
                                }]}>
                                    {`${item.location.street} ${item.location.city}, ${item.location.state}`}
                                </Text>
                            </View>
                            <View style={[{
                                borderRadius: 32,
                                borderRadius: 32,
                                padding: 8,
                                paddingLeft: 14,
                                paddingRight: 14,
                                alignSelf: 'center',
                                justifyContent: 'center'
                            }]}>
                                <Text style={[Styles.DealCount]}>
                                    {
                                        this.props.onlyShowDeals && _countDeals(item.deals,this.props.day)
                                    }
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                }} keyExtractor={(item,index) => {return index.toString()}}/>
            </View>
        );
        }
    }
}

export default Locations;