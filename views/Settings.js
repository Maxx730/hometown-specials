import React from "react";
import { View, Text, Switch, TouchableOpacity, Platform } from "react-native";
import { PageHit } from "expo-analytics";
import { Feather, Ionicons } from "@expo/vector-icons";

//Import Util Functions
import { _getPrefs, _savePrefs } from "../lib/Preferences";

//Import Styling
import Styles from "../lib/Styles";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prefs: null,
            analytics: null
        }
    }

    render() {
        return(
            <View>
                <TouchableOpacity style={[{
                    flexDirection: 'row',
                    padding: 16
                }]}  onPress={() => {
                    this.props.navigation.navigate('EULA');
                }}>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 16
                        }]}>
                            EULA
                        </Text>
                        <Text>
                            End User Liscense Agreement
                        </Text>
                    </View>
                    <View style={[{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }]}>
                        <Feather name={'chevron-right'} size={32}/>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Settings;