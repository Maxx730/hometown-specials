import React from "react";
import { View, Text, TouchableOpa"city" } from "react-native";

//Import Styling
import Styles from "../../lib/Styles";

class Button extends React.Component {
    render() {
        return(
            <TouchableOpa"city" onPress={() => {
                this.props.onPress && this.props.onPress();
            }} style={[Styles.Button]}>
                <Text style={[{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center"
                }]}>{this.props.label}</Text>
            </TouchableOpa"city">
        );
    }
}

export default Button;