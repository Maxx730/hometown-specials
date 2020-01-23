import React from 'react';
import { View, StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import { PageHit } from 'expo-analytics';

//Import Components
import Locations from '../src/components/Locations';
import Head from '../src/components/Head';
import Card from '../src/components/Card';
import Foot from '../src/components/Foot';

//Import Data
import data from '../lib/Data';

//Import Styles
import Styles from '../lib/Styles';

//Import Utility Methods
import { _getPrefs } from '../lib/Preferences';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this._setFocused = this._setFocused.bind(this);
        this._setSearchData = this._setSearchData.bind(this);
        this._refreshPrefs = this._refreshPrefs.bind(this);
        this._setScrollPosition = this._setScrollPosition.bind(this);
        this._setDay = this._setDay.bind(this);

        this.state = {
            focused: null,
            data: this.props.navigation.state.params.data,
            results: [],
            prefs: null,
            lastPos: 0,
            showSearch: false,
            analytics: this.props.navigation.state.params.analytics,
            day: new Date().getDay()
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
                <StatusBar barStyle="dark-content" />
                <Head analytics={this.state.analytics} day={this.state.day} setDay={this._setDay} showSearch={this.state.showSearch} refreshPrefs={this._refreshPrefs} navigation={this.props.navigation} data={this.state.data.locations} setSearchData={this._setSearchData}/>
                <View style={[Styles.Browse]}>
                    <Locations day={this.state.day} onlyShowDeals={this.state.prefs && this.state.prefs.onlyShowDeals} analytics={this.state.analytics} setScrollPosition={this._setScrollPosition} data={this.state.results.length > 0 ? this.state.results : this.state.data.locations} setFocused={this._setFocused}/>
                </View>
                {
                    this.state.focused !== null && <Card day={this.state.day} showMapDefault={this.state.prefs !== null ? this.state.prefs.showMapOpen : false} location={this.state.focused} onClose={this._setFocused}/>
                }
            </View>
        );
    }

    _setFocused(location) {
        this.setState({
            focused: location
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

    _setScrollPosition(value) {

    }
}

export default Main;