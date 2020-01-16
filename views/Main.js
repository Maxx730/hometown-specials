import React from 'react';
import { View, Text } from 'react-native';

//Import Components
import Locations from '../src/components/Locations';
import Head from '../src/components/Head';
import Card from '../src/components/Card';
import Foot from '../src/components/Foot';

//Import Styles
import Styles from '../lib/Styles';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this._setFocused = this._setFocused.bind(this);
        this._setSearchData = this._setSearchData.bind(this);

        this.state = {
            focused: null,
            data: this.props.data,
            results: []
        }
    }

    render() {
        return(
            <View style={[Styles.Main]}>
                <Head data={this.state.data} setSearchData={this._setSearchData}/>
                <View style={[Styles.Browse]}>
                    <Locations data={this.state.results.length > 0 ? this.state.results : this.state.data} setFocused={this._setFocused}/>
                </View>
                {
                    this.state.focused !== null && <Card location={this.state.focused} onClose={this._setFocused}/>
                }
                <Foot/>
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
}

export default Main;