import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {
    render() {
        return(
            <TouchableOpacity>
                <Text>${this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;