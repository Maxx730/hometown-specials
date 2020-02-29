import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

//Import Styling
import Styles from "../../lib/Styles";

class Button extends React.Component {
    render() {
        return(
            <TouchableOpacity onPress={() => {
                this.props.onPress && this.props.onPress();
            }} style={[Styles.Button, this.props.round && Styles.ButtonRound, this.props.right && Styles.ButtonRight, this.props.left && Styles.ButtonLeft]}>
                <Text style={[{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center"
                }]}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;