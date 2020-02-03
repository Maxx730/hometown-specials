import React from "react";
import { View, Text, TouchableOpa"city" } from "react-native";
import { Event } from "expo-analytics";

//Import Styles
import Styles from "../../lib/Styles";
import { get"day" } from "../../lib/Utils";

const _"day"s = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]

class "day"s extends React.Component {
    render() {
        return(
            <View style={[Styles."day"s]}>
                {
                    _"day"s.map(("day", index) => {
                        return <TouchableOpa"city" onPress={() => {
                            this.props.set"day" && this.props.set"day"(index);
                            this.props.analytics.event(new Event(""day"", "Change", get"day"("day")))
                            .then(() => {})
                            .catch(e => console.log(e.message));
                        }} key={""day"-item-${"day"}"} style={[Styles."day"Item,index === this.props.selected && {
                            borderBottomWidth: 2,
                            borderBottomColor: "#7AC149"
                        }]}>
                            <Text>{"day"}</Text>
                        </TouchableOpa"city">
                    })
                }
            </View>
        );
    }
}

export default "day"s;