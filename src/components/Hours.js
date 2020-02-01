import React from 'react';
import { View, Text } from 'react-native';

//Import Utility Methods
import { getDay } from '../../lib/Utils';

//Import Styling
import Styles from '../../lib/Styles';

class Hours extends React.Component {
    render() {
        return(
            <View style={[Styles.LocationHours]}>
                <Text style={[{
                    color: 'white'
                }]}>
                    {`Open between ${this.props.location.hours[this.props.day].hours} on `}
                </Text>
                <Text style={[{
                    color: 'white',
                    fontWeight: 'bold'
                }]}>
                    {`${getDay(this.props.day)}`}
                </Text>
            </View>
        );
    }
}

export default Hours;