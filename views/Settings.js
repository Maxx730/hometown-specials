import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { PageHit } from 'expo-analytics';
import { Feather, Ionicons } from '@expo/vector-icons';

//Import Util Functions
import { _getPrefs, _savePrefs } from '../lib/Preferences';

//Import Styling
import Styles from '../lib/Styles';

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prefs: null,
            analytics: this.props.navigation.state.params.analytics
        }
    }
    componentDidMount() {
        this.state.analytics.hit(new PageHit('Settings'))
        .then(() => console.log("success"))
        .catch(e => console.log(e.message));

        _getPrefs().then(result => {
            this.setState({
                prefs: result
            });
        });
    }

    render() {
        return(
            <View>
                {
                    this.state.prefs !== null && <View>
                        <TouchableOpacity style={[Styles.SettingsItem]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: 'center',
                            }]}>
                                Show Map Open
                            </Text>
                            <Switch thumbColor={'#7AC149'}trackColor={{true: '#CEEBBC', false: '#D9D9D9'}} onValueChange={(val) => {
                                let temp = this.state.prefs;
                                temp.showMapOpen = !this.state.prefs.showMapOpen;
                                this.setState({
                                    prefs: temp
                                });
                                _savePrefs(temp);
                                this.props.navigation.state.params.refresh();
                            }} value={this.state.prefs !== null ? this.state.prefs.showMapOpen : false}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('EULA');
                        }} style={[Styles.SettingsItem]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: 'center'
                            }]}>
                                Licence Agreement
                            </Text>
                            <Ionicons name={'ios-arrow-forward'} size={24}/>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

export default Settings;