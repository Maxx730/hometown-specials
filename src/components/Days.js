import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Event } from 'expo-analytics';

//Import Styles
import Styles from '../../lib/Styles';
import { getDay } from '../../lib/Utils';

const _days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
]

class Days extends React.Component {
    render() {
        return(
            <View style={[Styles.Days]}>
                {
                    _days.map((day, index) => {
                        return <TouchableOpacity onPress={() => {
                            this.props.setDay && this.props.setDay(index);
                            this.props.analytics.event(new Event('Day', 'Change', getDay(day)))
                            .then(() => {})
                            .catch(e => console.log(e.message));
                        }} key={`day-item-${day}`} style={[Styles.DayItem,index === this.props.selected && {
                            borderBottomWidth: 2,
                            borderBottomColor: '#7AC149'
                        }]}>
                            <Text>{day}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
        );
    }
}

export default Days;