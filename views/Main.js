import React from 'react';
import { View, StatusBar, Text, Platform, TouchableOpacity } from 'react-native';
import { PageHit } from 'expo-analytics';
import { Entypo } from '@expo/vector-icons';
import openMap from "react-native-open-maps";

//Import Components
import Locations from '../src/components/Locations';
import Head from '../src/components/Head';
import Button from '../src/components/Button';
import ButtonSet from '../src/components/ButtonSet';
import Tabs from '../src/components/Tabs';
import Navbar from '../src/components/Navbar';
import Modal from '../src/components/Modal';
import Submit from '../src/components/Submit';
import Deals from '../src/components/Deals';
import Hours from '../src/components/Hours';

//Import Data
import data from "../lib/Data";

//Import Styles
import Styles from "../lib/Styles";

//Import Utility Methods
import { _getPrefs } from '../lib/Preferences';
import { _getSpecials } from '../lib/Utils';

//Import Screens
import Search from './Search';
import Settings from './Settings';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this._setFocused = this._setFocused.bind(this);
        this._setSearchData = this._setSearchData.bind(this);
        this._setDay = this._setDay.bind(this);
        this._setNavigationLocation = this._setNavigationLocation.bind(this);
        this._toggleModal = this._toggleModal.bind(this);

        this.state = {
            focused: null,
            data: this.props.navigation.state.params.data,
            results: null,
            showSearch: false,
            analytics: this.props.navigation.state.params.analytics,
            day: new Date().getDay(),
            location: 'list',
            showModal: false,
            showHours: false,
            showAllInfo: false
        }
    }

    render() {
        return(
            <View behavior="padding" style={[Styles.Main]}>
                {this.state.showModal && this._renderModal({
                    title: 'Details',
                    content: this._getModal(this.state.showAllInfo),
                    onClose: () => {
                        this.setState({
                            focused: null,
                            showModal: false,
                            showHours: false,
                            showAllInfo: false
                        });
                    }
                })}
                {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
                <View style={[Styles.Browse]}>
                    <View style={[{
                        elevation: 6,
                        backgroundColor: '#FFFFFF',
                        paddingBottom: 12,
                        paddingTop: 24,
                        justifyContent: 'flex-end'
                    }]}>
                        {this.state.location === 'list' ? <Head day={this.state.day} setDay={this._setDay}/> : <Text style={[{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            padding: 12,
                            fontSize: 16
                        }]}>Find Locations</Text>}
                        <Tabs tabs={[{
                            label: 'Today',
                            callback: () => {
                                this.setState({
                                    location: 'list'
                                });
                            }
                        },{
                            label: 'Search',
                            callback: () => {
                                this.setState({
                                    location: 'search'
                                });
                            }
                        }]}/>
                    </View>
                    {this._renderNavigationLocation()}
                </View>
            </View>
        );
    }

    _getModal() {
        return(
            <View style={[{
                flex: 1
            }]}>
                <View style={[Styles.ModalAdress]}>
                    <View style={[{
                        flex: 1
                    }]}>
                        <Text style={[{
                            fontWeight: 'bold',
                            fontSize: 18
                        }]}>{this.state.focused.name}</Text>
                        <Text>{this.state.focused.location.street}, {this.state.focused.location.city}</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        openMap({ query: `${this.state.focused.name} ${this.state.focused.location.city}` });
                    }} style={[{
                        alignItems: 'center',
                        padding: 8
                    }]}>
                        <Entypo name={'map'} size={24}/>
                    </TouchableOpacity>
                </View>
                <View style={[Styles.ModalTabs]}>
                    <Tabs tabs={[{
                        label: 'Specials',
                        callback: () => {
                            this.setState({
                                showHours: false
                            });
                        }
                    },{
                        label: 'Hours',
                        callback: () => {
                            this.setState({
                                showHours: true
                            });
                        }
                    }]}/>
                </View>
                <View>
                    {!this.state.showAllInfo && <Head day={this.state.day} setDay={this._setDay}/>}
                </View>
                <View style={[Styles.ModalContent]}>
                    {this.state.showHours ? <Hours hours={this.state.focused.hours}/> : <View style={[{
                        flex: 1
                    }]}><Deals deals={this.state.focused.deals} showAllDeals={this.state.showAllInfo ? true : false} location={this.state.focused} day={this.state.day}/></View>}
                </View>
            </View>
        )
    }

    _renderModal(modal) {
        return(
            <Modal title={modal.title} onClose={() => {
                modal.onClose && modal.onClose();
            }}>
                {modal.content}
            </Modal>
        );
    }

    _setFocused(location, showAllInfo) {
        this.setState({
            focused: location,
            showModal: true,
            showAllInfo: showAllInfo ? true : false
        });
    }

    _toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    _setSearchData(data) {
        this.setState({
            results: data
        });
    }

    _setDay(day) {
        this.setState({
            day: day
        });
    }

    _setNavigationLocation(location) {
        this.setState({
            location: location
        });
    }

    _renderNavigationLocation() {
        switch(this.state.location) {
            case 'search':
                return <View style={[{
                    flex: 1
                }]}>
                    <Search data={this.state.data} setFocused={this._setFocused}/>
                </View>
            default: 
                return <View style={[{
                    flex: 1
                }]}>
                    <Locations day={this.state.day} onlyShowDeals={true} analytics={this.state.analytics} data={this.state.results ? this.state.results : this.state.data.locations} setFocused={this._setFocused}/>
                </View>
        }
    }
}

export default Main;