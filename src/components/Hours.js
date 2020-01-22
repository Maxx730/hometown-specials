import React from 'react';
import { View, Text } from 'react-native';

//Import Utility Methods
import { _getDayOfWeek } from '../../lib/Utils';

//Import Styling
import Styles from '../../lib/Styles';

class Hours extends React.Component {
    render() {
        return(
            <View style={[Styles.LocationHours]}>
                <Text style={[{
                    color: 'white'
                }]}>
                    {`Open between ${this.props.location.hours[new Date().getDay()].hours} on `}
                </Text>
                <Text style={[{
                    color: 'white',
                    fontWeight: 'bold'
                }]}>
                    {`${_getDayOfWeek(new Date().getDay())}`}
                </Text>
            </View>
        );
    }
}

export default Hours;