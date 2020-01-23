import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

//Import Components
import Days from '../components/Days';

//Import Styles
import Styles from '../../lib/Styles';

//Import Utility Methods
import { _getDayOfWeek, _findSpecials, getDay } from '../../lib/Utils';

class Head extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            showSearch: this.props.showSearch
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
                                getDay(this.props.day)
                            }
                        </Text>
                    </View>
                    <TouchableOpacity style={[{
                                padding: 3,
                                marginRight: 6
                            }]} onPress={() => {
                                this.props.navigation && this.props.navigation.navigate('Settings', {
                                    refresh: this.props.refreshPrefs
                                });
                            }}>
                                <Ionicons name='md-settings' color={'white'} size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={[Styles.Search]}>
                        <View style={[{
                            flexDirection: 'row'
                        }]}>
                            <Feather name={'search'} size={32} style={[{
                                padding: 6
                            }]}/>
                            <TextInput style={[{
                                flex: 1,
                                paddingLeft: 6,
                                padding: 12
                            }]} placeholder={'Search'} value={this.state.term} onChangeText={(value) => {
                                this.props.setSearchData && this.props.setSearchData(value === '' ? [] : _findSpecials(this.props.data,value));
                                this.setState({
                                    term: value
                                });
                            }}/>
                        </View>
                        <View style={[{
                            alignItems: 'center'
                        }]}>
                            <Days analytics={this.props.analytics} setDay={this.props.setDay} selected={this.props.day}/>
                        </View>
                    </View>
            </View>
        )
    }
}

export default Head;