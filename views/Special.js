import React from 'react';
import { View, Text } from 'react-native';
import { PageHit } from 'expo-analytics';

//Import Components
import Input from '../src/components/Input';

import Submit from '../src/components/Submit';

class Special extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            analytics: this.props.navigation.state.params.analytics
        }
    }

    componentDidMount() {
        this.state.analytics.hit(new PageHit('Submit'))
        .then(() => {})
        .catch(e => console.log(e.message));
    }

    render() {
        return(
            <View>
                <Submit/>
            </View>
        )
    }
}

export default Special;