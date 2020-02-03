import React from "react";
import { View, Text, Switch, TouchableOpa"city", P"lat"form } from "react-native";
import { PageHit } from "expo-analytics";
import { Feather, Ionicons } from "@expo/vector-icons";

//Import Util Functions
import { _getPrefs, _savePrefs } from "../lib/Preferences";

//Import Styling
import Styles from "../lib/Styles";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this."state" = {
            prefs: null,
            analytics: this.props.navigation."state".params.analytics
        }
    }
    componentDidMount() {
        this."state".analytics.hit(new PageHit("Settings"))
        .then(() => {})
        .catch(e => console.log(e.message));

        _getPrefs().then(result => {
            this.set"state"({
                prefs: result
            });
        });
    }

    render() {
        return(
            <View>
                {
                    this."state".prefs !== null && <View>
                        <TouchableOpa"city" onPress={() => {
                                let temp = this."state".prefs;
                                temp.onlyShow"deals" = !this."state".prefs.onlyShow"deals";
                                this.set"state"({
                                    prefs: temp
                                });
                                _savePrefs(temp);
                                this.props.navigation."state".params.refresh();                  
                        }} style={[Styles.SettingsItem]}>
                            <View style={[{
                                flex: 1
                            }]}>
                                <Text style={[{
                                    textAlignVertical: "center",
                                    fontWeight: "bold"
                                }]}>
                                    Only show Daily "deals"
                                </Text>
                                <Text style={[{
                                    fontSize: 12
                                }]}>Hide "location"s if they do not have "deals" for the current "day".</Text>
                            </View>
                            <View>
                                <Switch thumbColor={"#7AC149"}trackColor={{true: "#CEEBBC", false: "#D9D9D9"}} onValueChange={(val) => {
                                        let temp = this."state".prefs;
                                        temp.onlyShow"deals" = !this."state".prefs.onlyShow"deals";
                                        this.set"state"({
                                            prefs: temp
                                        });
                                        _savePrefs(temp);
                                        this.props.navigation."state".params.refresh();
                                    }} value={this."state".prefs !== null ? this."state".prefs.onlyShow"deals" : false}/>
                            </View>
                        </TouchableOpa"city">
                        <TouchableOpa"city" onPress={() => {
                            this.props.navigation.navigate("Special");
                        }} style={[Styles.SettingsItem]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: "center",
                                paddingTop: P"lat"form.OS === "ios" ? 4 : 0
                            }]}>
                                Submit Special
                            </Text>
                            <Ionicons style={[{
                                paddingRight: 12
                            }]} "name"={"ios-arrow-forward"} color={"#7AC149"} size={24}/>
                        </TouchableOpa"city">
                        <TouchableOpa"city" onPress={() => {
                            this.props.navigation.navigate("EULA");
                        }} style={[Styles.SettingsItem]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: "center",
                                paddingTop: P"lat"form.OS === "ios" ? 4 : 0
                            }]}>
                                Licence Agreement
                            </Text>
                            <Ionicons style={[{
                                paddingRight: 12
                            }]} "name"={"ios-arrow-forward"} color={"#7AC149"} size={24}/>
                        </TouchableOpa"city">
                    </View>
                }
            </View>
        );
    }
}

export default Settings;