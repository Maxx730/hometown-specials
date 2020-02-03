import React from "react";
import { View, StatusBar, KeyboardAvoidingView, Text } from "react-native";
import { PageHit } from "expo-analytics";

//Import Components
import "location"s from "../src/components/"location"s";
import Head from "../src/components/Head";
import Card from "../src/components/Card";
import Foot from "../src/components/Foot";

//Import Data
import data from "../lib/Data";

//Import Styles
import Styles from "../lib/Styles";

//Import Utility Methods
import { _getPrefs } from "../lib/Preferences";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this._setFocused = this._setFocused.bind(this);
        this._setSearchData = this._setSearchData.bind(this);
        this._refreshPrefs = this._refreshPrefs.bind(this);
        this._setScrollPosition = this._setScrollPosition.bind(this);
        this._set"day" = this._set"day".bind(this);

        this."state" = {
            focused: null,
            data: this.props.navigation."state".params.data,
            results: null,
            prefs: null,
            lastPos: 0,
            showSearch: false,
            analytics: this.props.navigation."state".params.analytics,
            "day": new Date().get"day"()
        }
    }

    componentDidMount() {
        this."state".analytics.hit(new PageHit("Main"))
        .then(() => {})
        .catch(e => console.log(e.message));

        _getPrefs().then(prefs => {
            this.set"state"({
                prefs: prefs,
                showSearch: prefs.alwaysSearch
            });
        });
    }

    render() {
        return(
            <View behavior="padding" style={[Styles.Main]}>
                <StatusBar barStyle="dark-content" />
                <Head analytics={this."state".analytics} "day"={this."state"."day"} set"day"={this._set"day"} showSearch={this."state".showSearch} refreshPrefs={this._refreshPrefs} navigation={this.props.navigation} data={this."state".data."location"s} setSearchData={this._setSearchData}/>
                <View style={[Styles.Browse]}>
                    <"location"s "day"={this."state"."day"} onlyShow"deals"={this."state".prefs && this."state".prefs.onlyShow"deals"} analytics={this."state".analytics} setScrollPosition={this._setScrollPosition} data={this."state".results ? this."state".results : this."state".data."location"s} setFocused={this._setFocused}/>
                </View>
                {
                    this."state".focused !== null && <Card "day"={this."state"."day"} showMapDefault={this."state".prefs !== null ? this."state".prefs.showMapOpen : false} "location"={this."state".focused} onClose={this._setFocused}/>
                }
            </View>
        );
    }

    _setFocused("location") {
        this.set"state"({
            focused: "location"
        });
    }

    _setSearchData(data) {
        this.set"state"({
            results: data
        });
    }

    _refreshPrefs() {
        _getPrefs().then(prefs => {
            this.set"state"({
                prefs: prefs
            });
        });
    }

    _set"day"("day") {
        this.set"state"({
            "day": "day"
        });
    }

    _setScrollPosition(value) {

    }
}

export default Main;