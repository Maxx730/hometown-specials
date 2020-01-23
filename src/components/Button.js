import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//Import Styling
import Styles from '../../lib/Styles';

class Button extends React.Component {
    render() {
        return(
            <TouchableOpacity style={[Styles.Button]}>
                <Text style={[{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }]}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;