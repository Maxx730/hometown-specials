import React from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions, Image } from "react-native";
import { Entypo, Ionicons, Feather } from "@expo/vector-icons";
import Svg, { Circle, Rect } from 'react-native-svg';
import Button from './Button';
import Counter from './Counter';
import TextTicker from 'react-native-text-ticker';
import Dash from 'react-native-dash';

import Coupon from '../../assets/drawing.png';

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
                    marginTop: this.props.showAllDeals ? 12 : 0,
                    backgroundColor: '#000000'
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
                <View style={[Styles.DealItem, index > 0 && {
                    marginTop: 0
                }]} key={`deal-${index}`}>
                    <View style={[{
                        backgroundColor: '#7AC149',
                        position: 'absolute',
                        width: '100%',
                        height: 72,
                        left: 0,
                        bottom: 0,
                        borderBottomRightRadius: 7,
                        borderBottomLeftRadius: 7
                    }]}>

                    </View>
                    {this.renderDealActions()}
                    <Dash dashColor={'#6AA840'} style={{ height:1, position: 'absolute', width: '95%', top: '70%'}}/>
                    <View style={[Styles.DealInformation]}>
                        <Svg height="100%" width="100%" viewBox="20 0 100 100">
                            <Circle cx="6" cy="70" r="8" fill="#000000" />
                            <Circle cx="106%" cy="70" r="8" fill="#000000" />
                        </Svg>
                    </View>
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

    renderDealActions() {
        return(
            <View style={[{
                flexDirection: 'row',
                position: 'absolute',
                zIndex: 99,
                bottom: 0,
                width: '100%',
            }]}>
                <TouchableOpacity style={[{
                    flex: 1,
                    paddingBottom: 22,
                    paddingLeft: 14,
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    <Feather color={'#FFFFFF'} name={'thumbs-up'} size={24}/>
                </TouchableOpacity>
                <TouchableOpacity style={[{
                    flex: 1,
                    paddingBottom: 22,
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    <Feather name={'map'} size={24}/>
                </TouchableOpacity>
                <TouchableOpacity style={[{
                    flex: 1,
                    paddingBottom: 22,
                    paddingRight: 14,
                    justifyContent: 'center',
                    alignItems: 'center'
                }]}>
                    <Feather name={'share-2'} size={24}/>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Deals;
