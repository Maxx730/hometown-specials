import React from 'react';
import { View, Text, TextInput } from 'react-native';

//Import Styles
import Styles from '../../lib/Styles';

class Input extends React.Component {
    render() {
        return(
            <View>
                <Text style={[Styles.InputLabel]}>
                    {this.props.label}
                </Text>
                <TextInput style={[Styles.Input]} numberOfLines={this.props.lines ? this.props.lines : 1} multiline={this.props.lines > 1}>

                </TextInput>
            </View>
        );
    }
}

export default Input;