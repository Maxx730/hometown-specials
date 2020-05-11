import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
import Button from './Button';
import Counter from './Counter';
import TextTicker from 'react-native-text-ticker'

//Import Styles
import Styles from "../../lib/Styles";

//Import Util Methods
import { _getSpecials, _getDayOfWeek, shareDeal, getAllSpecials, getDay } from "../../lib/Utils";

class Deals extends React.Component {
    render() {
        const deals = this.props.showAllDeals ? getAllSpecials(this.props.deals) : _getSpecials(this.props.deals, this.props.day);
        return(
            <View style={{
                flex: 1
            }}>
                {deals.length === 0 ? this.renderZeroDeals() : <ScrollView style={[{
                    marginTop: this.props.showAllDeals ? 12 : 0
                }]}>
                    {
                        this.props.showAllDeals ? this.renderAllDeals(deals) : this.renderDailyDeals(deals)
                    }
                </ScrollView>}

            </View>
        );
    }

    renderDailyDeals(deals) {
        return deals.map((item, index) => {
            return(
                <View style={[Styles.DealItem, index === (deals.length - 1) && {
                    borderBottomWidth: 0
                }]} key={`deal-${index}`}>
                    <View style={[Styles.DealInformation]}>
                        <Text style={[{
                            textTransform: 'capitalize',
                            fontWeight: 'bold'
                        }]}>
                            {item.type}
                        </Text>
                        <View style={{
                                marginRight: 12
                            }}>
                            <TextTicker duration={6000}>
                                {
                                    item.description
                                }
                            </TextTicker>
                        </View>
                    </View>
                    <Counter/>
                    {/* <TouchableOpacity onPress={() => {
                        shareDeal(`${this.props.location.name}`,`${this.props.location.name} - ${this.props.location.location.street}, ${this.props.location.location.city} ${this.props.location.location.state} - ${item.description}`)
                    }} style={[Styles.DealShare]}>
                        <Entypo name={'share'} size={24}/>
                    </TouchableOpacity> */}
                </View>
            )
        });
    }

    renderAllDeals(deals) {
        return deals.map((item, index) => {
            return(
                <View style={[Styles.DealItem, index === (deals.length - 1) && {
                    borderBottomWidth: 0
                }]} key={`deal-${index}`}>
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
                        <TextTicker style={{ fontSize: 24 }} duration={3000}>
                            {
                                item.deal.description
                            }
                        </TextTicker>
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

    renderZeroDeals() {
        return(
            <View style={[Styles.ZeroDeals]}>
                <View style={{
                    flexDirection: 'row',
                    padding: 16
                }}>
                    <View style={{
                        justifyContent: 'center',
                    }}>
                        <Feather  name={'alert-circle'} size={36}/>
                    </View>
                    <View style={{
                        padding: 12,
                        flex: 1
                    }}>
                        <Text>
                            Unfortunately it doesn't look like there are any deals on {getDay(this.props.day)}.
                        </Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Button round label={'Tap to Submit'}>

                        </Button>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Deals;
