import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

//Import Styles
import Styles from "../../lib/Styles";

//Import Util Methods 
import { _getSpecials, _getDayOfWeek, shareDeal } from "../../lib/Utils";

class Deals extends React.Component {
    render() {
        const deals = _getSpecials(this.props.deals, this.props.day);
        return(
            <View style={[Styles.Deals]}>
                <Text style={[Styles.DealsTitle]}>Today's Specials</Text>
                <ScrollView style={[{
                    
                }]}>
                    {
                        deals.map((item, index) => {
                            return(
                                <View style={[Styles.DealItem]} key={`deal-${index}`}>
                                    <View style={[Styles.DealInformation]}>
                                        <Text style={[{
                                            textTransform: 'capitalize',
                                            fontWeight: 'bold'
                                        }]}>
                                            {item.type}
                                        </Text>
                                        <Text style={[{
                                            textAlignVertical: 'center'
                                        }]}>
                                            {
                                                item.description
                                            }
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        shareDeal(`${this.props.location.name}`,`${this.props.location.name} - ${this.props.location.location.street}, ${this.props.location.location.city} ${this.props.location.location.state} - ${item.description}`)
                                    }} style={[Styles.DealShare]}>
                                        <Entypo name={'share'} size={24}/>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }

    _getIcon(type) {
        switch(type) {
            case "food":
                return <Ionicons name={"md-pizza"} size={24}/>
            case "drink":
                return <Entypo name={"drink"} size={24}/>
        }
    }
}

export default Deals;
