import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

//Import Styles
import Styles from '../../lib/Styles';

//Import Util Methods 
import { _getSpecials, _getDayOfWeek } from '../../lib/Utils';

class Deals extends React.Component {
    render() {
        return(
            <View style={[Styles.Deals]}>
                <Text style={[{
                    fontWeight: 'bold',
                    fontSize: 18,
                    paddingBottom: 12
                }]}>
                    {_getDayOfWeek()} Specials
                </Text>
                <FlatList data={_getSpecials(this.props.deals, new Date().getDay())} renderItem={({item, index}) => {
                return(
                    <View style={[Styles.DealItem]}>
                        {
                            this._getIcon(item.type)
                        }
                        <Text>
                            {
                                item.description
                            }
                        </Text>
                    </View>
                )
            }} keyExtractor={(item, index) => { return index.toString() }}/>
            </View>
        );
    }

    _getIcon(type) {
        switch(type) {
            case 'food':
                return <Image style={[Styles.TypeIcon]} source={require('../../assets/food.png')}/>
            case 'drink':
                return <Image style={[Styles.TypeIcon]} source={require('../../assets/drink.png')}/>
        }
    }
}

export default Deals;
