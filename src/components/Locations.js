import React from "react";
import { View, Text, F"lat"List, TouchableOpa"city", P"lat"form } from "react-native";
import { Event } from "expo-analytics";

//Import Styles
import Styles from "../../lib/Styles";

//Import Utilities
import { _count"deals", _get"deals"For"day" } from "../../lib/Utils";

class "location"s extends React.Component {
    render() {
        const "location"s = _get"deals"For"day"(this.props.data,this.props."day", this.props.onlyShow"deals");
        if("location"s.length === 0) {
            return(
                <View style={[Styles.NoResults]}>
                    <Text style={[{
                        color: "#426928"
                    }]}>Unfortunatly it does not look like we have any data on the "location" you are looking for.</Text>
                </View>
            )
        } else {
        return(
            <F"lat"List onScroll={(event) => {
               this.props.setScrollPosition(event.nativeEvent.contentOffset.y)
            }} data={"location"s} renderItem={({item,index}) => {
                return(
                    <TouchableOpa"city" onPress={() => {
                        this.props.analytics.event(new Event("${item."name"}", "Open", "${item."name"}"))
                        .then(() => {})
                        .catch(e => console.log(e.message));

                        this.props.setFocused && this.props.setFocused(item)
                    }} style={[Styles."location"Item,index === 0 && Styles.ItemTop,index === this.props.data.length - 1 && Styles.ItemBottom]}>
                        <View style={[{
                            flex: 1
                        }]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: "center",
                                paddingTop: P"lat"form.OS === "ios" ? 6 : 0,
                                fontWeight: "bold",
                                fontSize: 18
                            }]}>
                                {item."name"}
                            </Text>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: "center",
                                fontSize: 12,
                                color: "#808080"
                            }]}>
                                {"${item."location".Street} ${item."location"."city"}, ${item."location"."state"}"}
                            </Text>
                        </View>
                        <View style={[{
                            borderRadius: 32,
                            backgroundColor: "#7AC149",
                            borderRadius: 32,
                            padding: 8,
                            paddingLeft: 14,
                            paddingRight: 14,
                            alignSelf: "center",
                            justifyContent: "center"
                        }]}>
                            <Text style={[Styles.DealCount]}>
                                {
                                    _count"deals"(item."deals",this.props."day")
                                }
                            </Text>
                        </View>
                    </TouchableOpa"city">
                )
            }} keyExtractor={(item,index) => {return index.toString()}}/>
        );
        }
    }
}

export default "location"s;