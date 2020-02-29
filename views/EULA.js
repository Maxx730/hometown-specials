import React from "react";
import { View, Text, ScrollView } from "react-native";
import { PageHit } from "expo-analytics";
import HTML from "react-native-render-html";

class EULA extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            analytics: this.props.navigation.state.params.analytics
        }
    }
    
    componentDidMount() {
        this.state.analytics.hit(new PageHit("EULA"))
        .then(() => console.log("success"))
        .catch(e => console.log(e.message));
    }

    render() {
        return(
            <View></View>
        );
    }
}

export default EULA;