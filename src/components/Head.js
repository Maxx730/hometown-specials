import React from 'react';
import { View, Text, TextInput } from 'react-native';

//Import Styles
import Styles from '../../lib/Styles';

//Import Utility Methods
import { _getDayOfWeek, _findSpecials } from '../../lib/Utils';

class Head extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return(
            <View style={[Styles.Head]}>
                <View style={[Styles.Greeting]}>
                    <Text style={[Styles.Title]}>
                        Showing Deals on 
                    </Text>
                    <Text style={[Styles.DayOfWeek]}>
                        {
                            _getDayOfWeek()
                        }
                    </Text>
                </View>
                <TextInput style={[Styles.Search]} placeholder={'Search'} value={this.state.term} onChangeText={(value) => {
                    this.props.setSearchData && this.props.setSearchData(value === '' ? [] : _findSpecials(this.props.data,value));
                    this.setState({
                        term: value
                    });
                }}/>
            </View>
        )
    }
}

export default Head;