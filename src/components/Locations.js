import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

//Import Styles
import Styles from '../../lib/Styles';

//Import Utilities
import { _countDeals, _getDealsForDay } from '../../lib/Utils';

class Locations extends React.Component {
    render() {
        const locations = _getDealsForDay(this.props.data,new Date().getDay());
        return(
            <FlatList data={locations} renderItem={({item,index}) => {
                return(
                    <TouchableOpacity onPress={() => {
                        this.props.setFocused && this.props.setFocused(item)
                    }} style={[Styles.LocationItem,index === 0 && Styles.ItemTop,index === this.props.data.length - 1 && Styles.ItemBottom]}>
                        <Text style={[{
                            flex: 1,
                            textAlignVertical: 'center',
                            paddingTop: 6
                        }]}>
                            {item.name}
                        </Text>
                        <Text style={[Styles.DealCount]}>
                            {
                                _countDeals(item.deals,new Date().getDay())
                            }
                        </Text>
                    </TouchableOpacity>
                )
            }} keyExtractor={(item,index) => {return index.toString()}}/>
        );
    }
}

export default Locations;