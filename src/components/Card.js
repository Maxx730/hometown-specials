import React from "react";
import { View, Text, Animated, Dimensions, TouchableOpacity } from "react-native";
import MarqueeText from "react-native-marquee";
import openMap from "react-native-open-maps";
import { Feather } from "@expo/vector-icons";

//Import Styles
import Styles from "../../lib/Styles";

//Import Components
import Deals from "./Deals";
import Hours from "./Hours";

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            top: new Animated.Value(Dimensions.get("window").height),
            showMap: this.props.showMapDefault,
            showSubmit: true
        }
    }

    componentDidMount() {
        Animated.timing(this.state.top,{
            toValue: 0,
            duration: 250
        }).start();
    }

    render() {
        const location = this.props.location;

        return(
            <Animated.View style={[Styles.Card,{
                top: this.state.top,
                width: Dimensions.get("window").width
            }]}>
                <View style={[Styles.LocationHead]}>
                    <Text style={[Styles.LocationTitle]}>
                        {location.name}
                    </Text>
                    <TouchableOpacity onPress={() => {
                        Animated.timing(this.state.top,{
                            toValue: Dimensions.get("window").height,
                            duration: 250
                        }).start(() => {
                            this.props.onClose && this.props.onClose(null);
                        });
                    }}>
                        <Feather name={"x"} color={"white"} size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={[{
                    flex: 1
                }]}>
                    <View>
                        <MarqueeText>working working working working</MarqueeText>
                        <TouchableOpacity onPress={() => {
                            openMap({ query: "${location.name} ${location.location.city}" });
                        }} style={[Styles.OpenMap]}>
                            <Text style={[{
                                fontWeight: "bold",
                                fontSize: 18,
                                color: "white"
                            }]}>{location.location.Street}, </Text>
                            <Text style={[{
                                fontWeight: "bold",
                                fontSize: 18,
                                color: "white"
                            }]}>{location.location.city}, </Text>
                            <Text style={[{
                                fontWeight: "bold",
                                fontSize: 18,
                                color: "white"
                            }]}>{location.location.state}</Text>
                        </TouchableOpacity>
                        {

                        }
                    </View>
                    <View>
                        <Hours day={this.props.day} location={location}/>
                    </View>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Deals day={this.props.day} Deals={location.Deals}/>
                    </View>
                </View>
            </Animated.View>
        );
    }
}

export default Card;