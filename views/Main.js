import React from 'react';
import { View, StatusBar, Text, Platform } from 'react-native';
import { PageHit } from 'expo-analytics';

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
import data from '../lib/Data';

//Import Styles
import Styles from '../lib/Styles';

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
        this._refreshPrefs = this._refreshPrefs.bind(this);
        this._setScrollPosition = this._setScrollPosition.bind(this);
        this._setDay = this._setDay.bind(this);
        this._setNavigationLocation = this._setNavigationLocation.bind(this);
        this._toggleModal = this._toggleModal.bind(this);

        this.state = {
            focused: null,
            data: this.props.navigation.state.params.data,
            results: null,
            prefs: null,
            lastPos: 0,
            showSearch: false,
            analytics: this.props.navigation.state.params.analytics,
            day: new Date().getDay(),
            location: 'list',
            showModal: false,
            showHours: false
        }
    }

    componentDidMount() {
        this.state.analytics.hit(new PageHit('Main'))
        .then(() => {})
        .catch(e => console.log(e.message));

        _getPrefs().then(prefs => {
            this.setState({
                prefs: prefs,
                showSearch: prefs.alwaysSearch
            });
        });
    }

    render() {
        return(
            <View behavior="padding" style={[Styles.Main]}>
                {this.state.showModal && this._renderModal()}
                {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
                <View style={[Styles.Browse]}>
                    {this._renderNavigationLocation()}
                    <View style={[{
                        backgroundColor: '#FFFFFF',
                        borderTopColor: '#000000',
                        borderTopWidth: 1
                    }]}>
                        <Navbar location={this.state.location} setNavigationLocation={this._setNavigationLocation}/>
                    </View>
                </View>
            </View>
        );
    }

    _renderModal() {
        return(
            <Modal title={'Details'} onClose={() => {
                this.setState({
                    focused: null,
                    showModal: false
                });
            }}>
                <View style={[Styles.ModalAdress]}>
                    <Text style={[{
                        fontWeight: 'bold',
                        fontSize: 18
                    }]}>{this.state.focused.name}</Text>
                    <Text>{this.state.focused.location.street}, {this.state.focused.location.city}</Text>
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
                <View style={[Styles.ModalContent]}>
                    {this.state.showHours ? <Hours hours={this.state.focused.hours}/> : <View><Head day={this.state.day} setDay={this._setDay}/><Deals deals={this.state.focused.deals} day={this.state.day}/></View>}
                </View>
            </Modal>
        );
    }

    _setFocused(location) {
        this.setState({
            focused: location,
            showModal: true
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

    _refreshPrefs() {
        _getPrefs().then(prefs => {
            this.setState({
                prefs: prefs
            });
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

    _setScrollPosition(value) {

    }

    _renderNavigationLocation() {
        switch(this.state.location) {
            case 'settings':
                return <View style={[{
                    flex: 1
                }]}><Settings/></View>
            case 'submit':
                return <View style={[Styles.Submit]}><Submit/></View>
            default: 
                return <View style={[{
                    flex: 1
                }]}><View style={[{
                    borderBottomWidth: 1,
                    backgroundColor: '#FFFFFF',
                    paddingTop: 24
                }]}><Head day={this.state.day} setDay={this._setDay}/><Tabs tabs={[{
                    label: 'Today'
                },{
                    label: 'All'
                }]}/></View><Locations day={this.state.day} onlyShowDeals={this.state.prefs && this.state.prefs.onlyShowDeals} analytics={this.state.analytics} setScrollPosition={this._setScrollPosition} data={this.state.results ? this.state.results : this.state.data.locations} setFocused={this._setFocused}/></View>
        }
    }
}

export default Main;