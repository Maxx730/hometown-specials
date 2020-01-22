import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Platform } from 'react-native';
import { Event } from 'expo-analytics';

//Import Styles
import Styles from '../../lib/Styles';

//Import Utilities
import { _countDeals, _getDealsForDay } from '../../lib/Utils';

class Locations extends React.Component {
    render() {
        const locations = _getDealsForDay(this.props.data,new Date().getDay(), this.props.onlyShowDeals);
        return(
            <FlatList onScroll={(event) => {
               this.props.setScrollPosition(event.nativeEvent.contentOffset.y)
            }} data={locations} renderItem={({item,index}) => {
                return(
                    <TouchableOpacity onPress={() => {
                        this.props.analytics.event(new Event(`${item.name}`, 'Open', `${item.name}`))
                        .then(() => {})
                        .catch(e => console.log(e.message));

                        this.props.setFocused && this.props.setFocused(item)
                    }} style={[Styles.LocationItem,index === 0 && Styles.ItemTop,index === this.props.data.length - 1 && Styles.ItemBottom]}>
                        <View style={[{
                            flex: 1
                        }]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: 'center',
                                paddingTop: Platform.OS === 'ios' ? 6 : 0,
                                fontWeight: 'bold',
                                fontSize: 18
                            }]}>
                                {item.name}
                            </Text>
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
                            backgroundColor: '#7AC149',
                            borderRadius: 32,
                            padding: 8,
                            paddingLeft: 14,
                            paddingRight: 14,
                            alignSelf: 'center',
                            justifyContent: 'center'
                        }]}>
                            <Text style={[Styles.DealCount]}>
                                {
                                    _countDeals(item.deals,new Date().getDay())
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                )
            }} keyExtractor={(item,index) => {return index.toString()}}/>
        );
    }
}

export default Locations;