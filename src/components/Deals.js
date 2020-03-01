import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

//Import Styles
import Styles from "../../lib/Styles";

//Import Util Methods 
import { _getSpecials, _getDayOfWeek, shareDeal, getAllSpecials, getDay } from "../../lib/Utils";

class Deals extends React.Component {
    render() {
        const deals = this.props.showAllDeals ? getAllSpecials(this.props.deals) : _getSpecials(this.props.deals, this.props.day);
        return(
            <View style={[Styles.Deals]}>
                {!this.props.showAllDeals && <Text style={[Styles.DealsTitle]}>Today's Specials</Text>}
                <ScrollView style={[{
                    marginTop: this.props.showAllDeals ? 12 : 0
                }]}>
                    {
                        this.props.showAllDeals ? this.renderAllDeals(deals) : this.renderDailyDeals(deals)
                    }
                </ScrollView>
            </View>
        );
    }

    renderDailyDeals(deals) {
        return deals.map((item, index) => {
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
        });
    }

    renderAllDeals(deals) {
        return deals.map((item, index) => {
            return(
                <View style={[Styles.DealItem]} key={`deal-${index}`}>
                    <View style={[Styles.DealInformation]}>
                        <View style={[{
                            flexDirection: 'row'
                        }]}>
                            <Text style={[{
                                textTransform: 'capitalize',
                                fontWeight: 'bold'
                            }]}>
                                {getDay(item.day)}
                            </Text>
                        </View>
                        <Text style={[{
                            textAlignVertical: 'center'
                        }]}>
                            {
                                item.deal.description
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
        });
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
