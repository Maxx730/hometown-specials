import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

//Import Styles
import Styles from '../../lib/Styles';

//Import Utility Methods
import { _getDayOfWeek, _findSpecials } from '../../lib/Utils';

class Head extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            showSearch: false
        }
    }

    render() {
        return(
            <View style={[Styles.Head]}>
                <View style={[{
                    flexDirection: 'row',
                    padding: 12
                }]}>
                    <View style={[Styles.Greeting, {
                        flex: 1
                    }]}>
                        <Text style={[Styles.Title]}>
                            Showing Deals on 
                        </Text>
                        <Text style={[Styles.DayOfWeek]}>
                            {
                                _getDayOfWeek()
                            }
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        this.setState({
                            showSearch: !this.state.showSearch
                        });
                    }}>
                        <Feather name='menu' color='white' size={24}/>
                    </TouchableOpacity>
                </View>
                {
                    this.state.showSearch && <View style={[Styles.Search,{
                        flexDirection: 'row'
                    }]}>
                        <TextInput style={[{
                            flex: 1,
                            paddingLeft: 18
                        }]} placeholder={'Search'} value={this.state.term} onChangeText={(value) => {
                            this.props.setSearchData && this.props.setSearchData(value === '' ? [] : _findSpecials(this.props.data,value));
                            this.setState({
                                term: value
                            });
                        }}/>
                        <TouchableOpacity style={[{
                            padding: 9,
                            marginRight: 6
                        }]} onPress={() => {
                            this.props.navigation && this.props.navigation.navigate('Settings', {
                                refresh: this.props.refreshPrefs
                            });
                        }}>
                            <Ionicons name='md-settings' color={'#7AC149'} size={32}/>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}

export default Head;