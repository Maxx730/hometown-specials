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
                    <TouchableOpacity style={[Styles.AddSpecialButton]} onPress={() => {
                            this.props.navigation.navigate('Special')
                        }}>
                        <Text style={[Styles.BoldWhite]}>
                            Submit Special
                        </Text>
                    </TouchableOpacity>
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
                            alignItems: 'center',
                            borderBottomColor: '#7AC149',
                            borderBottomWidth: 1,
                        }]}>
                            <Days analytics={this.props.analytics} setDay={this.props.setDay} selected={this.props.day}/>
                        </View>
                        <View style={[{
                            flexDirection: 'row'
                        }]}>
                            <Feather name={'search'} size={24} color={'#E1E1E1'} style={[{
                                padding: 12
                            }]}/>
                            <TextInput style={[{
                                flex: 1,
                                paddingLeft: 0,
                                padding: 12
                            }]} placeholder={'Search'} value={this.state.term} onChangeText={(value) => {
                                this.props.setSearchData && this.props.setSearchData(value === '' ? this.props.data : _findSpecials(this.props.data,value));
                                this.setState({
                                    term: value
                                });
                            }}/>
                            {
                                this.state.term !== '' && <TouchableOpacity onPress={() => {
                                    this.props.setSearchData && this.props.setSearchData([]);
                                    this.setState({
                                        term: ''
                                    });
                                }}>
                                    <Feather name={'x'} size={24} style={[{
                                        padding: 12,
                                        marginRight: 6
                                    }]}/>
                                </TouchableOpacity>
                            }

                        </View>
                    </View>
            </View>
        )
    }

    clearSearch() {
        this.setState({
            term: ''
        });
    }
}

export default Head;