import React from "react";
import { View, Text, Switch, TouchableOpacity, Platform } from "react-native";
import { PageHit } from "expo-analytics";
import { Feather, Ionicons } from "@expo/vector-icons";

//Import Util Functions
import { _getPrefs, _savePrefs, _setDefaults, _scheduleNotification, _clearNotifications } from "../lib/Preferences";
import {_getDealsForDay, _getdayOfWeek, _getDaysOfWeek, getDay } from '../lib/Utils';

//Import Styling
import Styles from "../lib/Styles";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prefs: this.props.navigation.state.params.prefs,
            analytics: null
        }

        this.toggleDaily = this.toggleDaily.bind(this);
        this.iconImage = require('../assets/notification.png');
    }

    render() {
        return(
            <View>
                <TouchableOpacity style={[{
                    flexDirection: 'row',
                    padding: 16
                }, Styles.SettingsItem]}  onPress={() => {
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
                <TouchableOpacity style={[{
                    flexDirection: 'row',
                    padding: 16
                }, Styles.SettingsItem]} onPress={this.toggleDaily}>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 16
                        }]}>
                            Daily Notifications
                        </Text>
                        <Text style={[{
                            paddingRight: 4
                        }]}>
                            Create reminders for the day's current deals.
                        </Text>
                    </View>
                    <View style={[{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }]}>
                        <Switch trackColor={{
                            true: '#DDF0D1',
                            false: '#F5F5F5'
                        }} thumbColor={this.state.prefs.dailyNotifications ? '#7AC149' : '#E6E6E6'} onValueChange={this.toggleDaily} value={this.state.prefs.dailyNotifications}/>
                    </View>
                </TouchableOpacity>
                <View style={[Styles.SettingsItem, {
                    padding: 16,
                    flexDirection: 'column'
                }]}>
                    <Text style={[{
                        fontWeight: 'bold',
                        fontSize: 16
                    }]}>
                        Unique ID
                    </Text>
                    <Text>
                        {this.props.navigation.state.params.prefs.id}
                    </Text>
                </View>
            </View>
        );
    }

    toggleDaily() {
        let update = JSON.parse(JSON.stringify(this.state.prefs));
        update.dailyNotifications = !update.dailyNotifications;

        this.props.navigation.state.params.save(update).then(prefs => {
            this.setState({
                prefs: prefs
            });
        });
    }

}

export default Settings;