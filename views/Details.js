import React from "react";
import { View, Text } from "react-native";
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';

//Import Components
import Tabs from '../src/components/Tabs';
import Deals from '../src/components/Deals';

//Import Utils
import Styles from '../lib/Styles';

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            location: this.props.navigation.state.params.location
        }
    }

    render() {
        return(
            <View style={[Styles.DetailsView]}>
                <View style={[Styles.DetailsBody]}>
                    <Deals deals={this.state.location.deals} day={this.props.navigation.state.params.day}/>
                </View>
            </View>
        );
    }
}

export default Details;