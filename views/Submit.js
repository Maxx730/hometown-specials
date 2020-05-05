import React from 'react';
import { View, Text } from 'react-native';
import Button from '../src/components/Button';

import Styles from '../lib/Styles';

class Submit extends React.Component {
    render() {
        return(
            <View style={[Styles.SubmissionFrame]}>
                <View style={[Styles.LocationChoiceFrame]}>
                    <Button round label={'Button 1'}/>
                    <Text style={[Styles.OrDivider]}>
                        OR
                    </Text>
                    <Button round label={'Button 1'}/>
                </View>
            </View>
        );
    }
}

export default Submit;