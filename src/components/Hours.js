import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

//Import Styling
import Styles from '../../lib/Styles';

//Import Utils
import { getDay } from '../../lib/Utils';

class Hours extends React.Component {
    render() {
        return(
            <View style={[Styles.LocationHours]}>
                <Text style={[{
                    fontWeight: 'bold',
                    fontSize: 18
                }]}>Hours</Text>
                <ScrollView style={[Styles.HoursList]}>
                    {this.props.hours.map((item,index) => {
                        return(
                            <View style={[Styles.HoursItem]} key={`hour-${index}`}>
                                <Text style={[{
                                    fontWeight: 'bold'
                                }]}>{getDay(item.day)}</Text>
                                <Text>{item.hours}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

export default Hours;