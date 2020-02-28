import React from 'react';
import { View, Text, Switch, TouchableOpacity, Platform } from 'react-native';
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
            analytics: null
        }
    }
    componentDidMount() {
        // this.state.analytics.hit(new PageHit('Settings'))
        // .then(() => {})
        // .catch(e => console.log(e.message));

        // _getPrefs().then(result => {
        //     this.setState({
        //         prefs: result
        //     });
        // });
    }

    render() {
        return(
            <View>
                {
                    this.state.prefs !== null && <View>
                        <TouchableOpacity onPress={() => {
                                let temp = this.state.prefs;
                                temp.onlyShowDeals = !this.state.prefs.onlyShowDeals;
                                this.setState({
                                    prefs: temp
                                });
                                _savePrefs(temp);
                                this.props.navigation.state.params.refresh();                  
                        }} style={[Styles.SettingsItem]}>
                            <View style={[{
                                flex: 1
                            }]}>
                                <Text style={[{
                                    textAlignVertical: 'center',
                                    fontWeight: 'bold'
                                }]}>
                                    Only show Daily Deals
                                </Text>
                                <Text style={[{
                                    fontSize: 12
                                }]}>Hide locations if they do not have deals for the current day.</Text>
                            </View>
                            <View>
                                <Switch thumbColor={'#7AC149'}trackColor={{true: '#CEEBBC', false: '#D9D9D9'}} onValueChange={(val) => {
                                        let temp = this.state.prefs;
                                        temp.onlyShowDeals = !this.state.prefs.onlyShowDeals;
                                        this.setState({
                                            prefs: temp
                                        });
                                        _savePrefs(temp);
                                        this.props.navigation.state.params.refresh();
                                    }} value={this.state.prefs !== null ? this.state.prefs.onlyShowDeals : false}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Special');
                        }} style={[Styles.SettingsItem]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: 'center',
                                paddingTop: Platform.OS === 'ios' ? 4 : 0
                            }]}>
                                Submit Special
                            </Text>
                            <Ionicons style={[{
                                paddingRight: 12
                            }]} name={'ios-arrow-forward'} color={'#7AC149'} size={24}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('EULA');
                        }} style={[Styles.SettingsItem]}>
                            <Text style={[{
                                flex: 1,
                                textAlignVertical: 'center',
                                paddingTop: Platform.OS === 'ios' ? 4 : 0
                            }]}>
                                Licence Agreement
                            </Text>
                            <Ionicons style={[{
                                paddingRight: 12
                            }]} name={'ios-arrow-forward'} color={'#7AC149'} size={24}/>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        );
    }
}

export default Settings;