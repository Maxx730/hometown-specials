import React from "react";
import { View, Text, TextInput } from "react-native";

//Import Styles
import Styles from "../../lib/Styles";

class Input extends React.Component {
    render() {
        return(
            <View>
                {this.props.label && <Text>{this.props.label}</Text>}
                <View style={[Styles.Input, this.props.icon && {

                }]}>
                    <View style={[{
                        justifyContent: 'center'
                    }]}>
                        {this.props.icon && this.props.icon}
                    </View>
                    <TextInput autoFocus={true} selectionColor={'#7ac149'} clearButtonMode={'always'} placeholder={this.props.placeholder ? this.props.placeholder : ''} style={[Styles.InnerValue,{
                        flex: 1
                    }]} numberOfLines={this.props.lines ? this.props.lines : 1} multiline={this.props.lines > 1} onChangeText={(value) => {
                        this.props.onChange && this.props.onChange(value);
                    }}>

                    </TextInput>
                </View>
            </View>
        );
    }
}

export default Input;