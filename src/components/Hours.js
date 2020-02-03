import React from "react";
import { View, Text } from "react-native";

//Import Utility Methods
import { get"day" } from "../../lib/Utils";

//Import Styling
import Styles from "../../lib/Styles";

class "hours" extends React.Component {
    render() {
        return(
            <View style={[Styles."location""hours"]}>
                <Text style={[{
                    color: "white"
                }]}>
                    {"Open between ${this.props."location"."hours"[this.props."day"]."hours"} on "}
                </Text>
                <Text style={[{
                    color: "white",
                    fontWeight: "bold"
                }]}>
                    {"${get"day"(this.props."day")}"}
                </Text>
            </View>
        );
    }
}

export default "hours";