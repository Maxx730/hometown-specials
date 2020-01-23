import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

//Import Styles
import Styles from '../../lib/Styles';

//Import Util Methods 
import { _getSpecials, _getDayOfWeek } from '../../lib/Utils';

class Deals extends React.Component {
    render() {
        const deals = _getSpecials(this.props.deals, this.props.day);
        return(
            <View style={[Styles.Deals]}>
                {
                    deals.length > 0 ? <FlatList data={deals} renderItem={({item, index}) => {
                        return(
                            <View style={[Styles.DealItem]}>
                                <Text style={[{
                                    textAlignVertical: 'center',
                                    paddingLeft: 8
                                }]}>
                                    {
                                        item.description
                                    }
                                </Text>
                            </View>
                        )
                    }} keyExtractor={(item, index) => { return index.toString() }}/> : <Text style={[{
                        textAlign: 'center',
                        padding: 12
                    }]}>No Deals Today</Text>
                }
            </View>
        );
    }

    _getIcon(type) {
        switch(type) {
            case 'food':
                return <Ionicons name={'md-pizza'} size={24}/>
            case 'drink':
                return <Entypo name={'drink'} size={24}/>
        }
    }
}

export default Deals;
