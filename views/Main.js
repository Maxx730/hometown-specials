import React from 'react';
import { View, StatusBar, Text, Platform, TouchableOpacity } from 'react-native';
import { PageHit } from 'expo-analytics';
import { Entypo, Feather, AntDesign } from '@expo/vector-icons';
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
import Input from '../src/components/Input';
import Toast from '../src/components/Toast';

//Import Data
import data from "../lib/Data";

//Import Styles
import Styles from "../lib/Styles";

//Import Utility Methods
import { _getPrefs, _savePrefs, _setDefaults, _cacheLocations, _getCache, _clearCache } from '../lib/Preferences';
import { _getSpecials, getDay } from '../lib/Utils';
import {_getCachedData, _saveCacheData, _hasCachedData, _deleteCache} from "../lib/Storage";
import * as Network from '../lib/Network';

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
        this._savePrefs = this._savePrefs.bind(this);

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
            showAllInfo: false,
            searchTerm: '',
            toasting: false,
            toastMessage: '',
            prefs: null,
            loading: true,
            errors: []
        }
    }

    //Grab the data from the backend server.
    componentDidMount() {
        _hasCachedData().then(proceed => {
            // If we have found data then we want to read the cached data
            if (proceed) {

            } else {
                // if the file does not yet exist we need to send a request to the server and get the data
                
            }
        }).catch(err => {
            var _errors = JSON.parse(JSON.stringify(this.state.errors))
            _errors.push({
                title: 'ERROR',
                desc: 'Unable to load cache file.'
            });
            this.setState({
                errors: _errors
            });
        });
    }


    render() {
        return(
            <View behavior="padding" style={[Styles.Main]}>
                {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
                {this.state.errors.length > 0 && <Text>error</Text>}
            </View>
        )
    }

    _renderModal(modal) {
        return(
            <Modal weight={this.state.modalWeight ? this.state.modalWeight : 1} title={modal.title} growBody={true} onClose={() => {
                modal.onClose && modal.onClose();
            }}>
                {modal.content}
            </Modal>
        );
    }

    _setFocused(location, showAllInfo) {
        this.props.navigation.navigate('Details');
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
            day: day,
            toasting: true,
            toastMessage: `Changed to ${getDay(day)}`
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
                    <Search term={this.state.searchTerm} data={this.state.data} setFocused={this._setFocused}/>
                </View>
            default:
                return <View style={[{
                    flex: 1
                }]}>
                    <Locations day={this.state.day} onlyShowDeals={true} analytics={this.state.analytics} data={this.state.results ? this.state.results : this.state.data.locations} setFocused={this._setFocused}/>
                </View>
        }
    }

    _savePrefs(prefs) {
        return new Promise((resolve, reject) => {
            _savePrefs(prefs).then(result => {
                this.setState({
                    prefs: result
                });

                resolve(result);
            });
        });
    }

    _requestData() {
        Network._getLocations().then(locations => {
            this.setState({
                data:{
                    locations: locations
                },
                toasting: true,
                toastMessage: 'Refreshing information...'
            });
        });
    }
}

export default Main;