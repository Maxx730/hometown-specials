import React from "react";
import { View, Text, Switch, TouchableOpacity, Platform } from "react-native";
import { PageHit } from "expo-analytics";
import { Feather, Ionicons } from "@expo/vector-icons";

//Import Util Functions
import { _getPrefs, _savePrefs, _setDefaults, _scheduleNotification, _clearNotifications } from "../lib/Preferences";
import {_getDealsForDay, _getdayOfWeek, _getDaysOfWeek, getDay } from '../lib/Utils';

//Import Styling
import Styles from "../lib/Styles";

//Import Components
import Toast from '../src/components/Toast';
import Modal from '../src/components/Modal';
import Button from '../src/components/Button';

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prefs: this.props.navigation.state.params.prefs,
            analytics: null,
            toastMessage: '',
            toasting: false,
            showingModal: false
        }

        this.toggleDaily = this.toggleDaily.bind(this);
        this.setDefaults = this.setDefaults.bind(this);
        this.iconImage = require('../assets/notification.png');
    }

    render() {
        return(
            <View style={[{
  
            }]}>
                {this.state.showingModal && this._renderModal({
                    title: 'Are you sure?',
                    content: <View style={[{
                        paddingLeft: 18,
                        paddingRight: 18,
                        flex: 3
                    }]}>
                        <Text style={[{
                            fontSize: 18
                        }]}>
                            By selecting confirm, any settings that where adjusted will be reset to their default values.  
                        </Text>
                    </View>,
                    onClose:() => {
                        this.setState({
                            showingModal: false
                        });
                    },
                    buttons: [{
                        label: 'Cancel',
                        isCancel: true
                    },{
                        label: 'Confirm',
                        press: () => {
                            this.setDefaults();
                        }
                    }],
                    fromTop: 450
                })}
                {this.state.toasting && <Toast message={'Preferences set back to defaults.'} onComplete={() => {
                    this.setState({
                        toasting: false
                    });
                }}/>}
                
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
                        {this.state.prefs.id}
                    </Text>
                </View>
                <TouchableOpacity style={[{
                    flexDirection: 'row',
                    padding: 16
                }, Styles.SettingsItem]} onPress={() => {
                    this.setState({
                        showingModal: true,
                        modalWeight: 1.5
                    });
                }}>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 16
                        }]}>
                            Reset to Defaults
                        </Text>
                        <Text style={[{
                            paddingRight: 4
                        }]}>
                            Resets settings to default values.
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[{
                    flexDirection: 'row',
                    padding: 16
                }, Styles.SettingsItem]} onPress={() => {
                    this.props.navigation.goBack()
                    this.props.navigation.state.params.refresh()
                }}>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 16
                        }]}>
                            Refresh Information
                        </Text>
                        <Text style={[{
                            paddingRight: 4
                        }]}>
                            Requests the most up to date information from our server.
                        </Text>
                    </View>
                </TouchableOpacity>
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

    setDefaults() {
        this.props.navigation.state.params.setDefaults().then(prefs => {
            this.setState({
                prefs: prefs,
                toasting: true
            });
        });
    }

    _renderModal(modal) {
        return(
            <Modal weight={this.state.modalWeight ? this.state.modalWeight : 1} fromTop={modal.fromTop} title={modal.title} onClose={() => {
                modal.onClose && modal.onClose();
            }} buttons={modal.buttons}>
                {modal.content}
            </Modal>
        );
    }

}

export default Settings;